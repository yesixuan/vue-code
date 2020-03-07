# handlers 代理方法

## mutableHandlers 常规对象使用的 handler

### createGetter

`Reflect`将一些明显属于语言内部的方法(Object.defineProperty)，放到 Reflect 中，作为它的静态方法。

1. target 是数组，并且有调用的数组的`includes`, `indexOf`, `lastIndexOf`方法时，提前返回结果
2. 通过`Reflect`回到将要返回的值
3. 判断键是否为`Symbol`，如果是，提前返回结果
4. 判断是否浅包装（只代理第一层属性）
5. 判断是否为`Ref`对象，如果是，返回`ref.value`
6. `track`依赖追踪（收集）
7. 递归进行响应式代理

```ts
function createGetter(isReadonly = false, shallow = false) {
  return function get(target: object, key: string | symbol, receiver: object) {
    if (isArray(target) && hasOwn(arrayInstrumentations, key)) {
      return Reflect.get(arrayInstrumentations, key, receiver)
    }
    // receiver： 在读取属性中遇到 this 的访问，则将 this 指向 传入的 receiver
    const res = Reflect.get(target, key, receiver)
    if (isSymbol(key) && builtInSymbols.has(key)) {
      return res
    }
    if (shallow) {
      track(target, TrackOpTypes.GET, key)
      return res
    }
    if (isRef(res) && !isArray(target)) {
      return res.value
    }
    track(target, TrackOpTypes.GET, key)
    return isObject(res)
      ? isReadonly
        ? readonly(res)
        : reactive(res)
      : res
  }
}
```

### createSetter

1. 通过 `Reflect.set` 修改属性值
2. 调用 `trigger`

```ts {27,29}
function createSetter(isReadonly = false, shallow = false) {
  return function set(
    target: object,
    key: string | symbol,
    value: unknown,
    receiver: object
  ): boolean {
    // ...开发环境下警告不允许修改 readOnly 数据

    const oldValue = (target as any)[key]
    if (!shallow) {
      value = toRaw(value)
      // 如果修改的属性是一个 Ref 对象，则自动展开 ref 的 value 属性，修改其 value 值
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        oldValue.value = value
        return true
      }
    } else {
      // in shallow mode, objects are set as-is regardless of reactive or not
    }

    const hadKey = hasOwn(target, key)
    const result = Reflect.set(target, key, value, receiver)
    // don't trigger if target is something up in the prototype chain of original
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, TriggerOpTypes.ADD, key, value)
      } else if (hasChanged(value, oldValue)) {
        trigger(target, TriggerOpTypes.SET, key, value, oldValue)
      }
    }
    return result
  }
}
```
