# reactive

## usage

```js
import { reactive } from 'vue'

const obj = reactive({ foo: 0 })
```

## reactive 函数

该函数主要做一些对参数的判断，主要逻辑交由`createReactiveObject`函数来做 

```ts
export function reactive<T extends object>(target: T): UnwrapNestedRefs<T>
export function reactive(target: object) {
  // ... 判断是否为 readonly、 ref，如果是则提前返回  
  return createReactiveObject(
    target,
    rawToReactive,
    reactiveToRaw,
    mutableHandlers,
    mutableCollectionHandlers
  )
}
```

## createReactiveObject

1. 判断 target 是否已被代理、已经是一个 Proxy 对象、是否在被代理的白名单中（如：VNode...） 
2. 判断是普通对象还是 Set, Map, WeakMap, WeakSet，从而选择不同的 handler  
3. 保存 target -> observed  
4. 保存 observed -> target

```ts
function createReactiveObject(
  target: unknown,
  toProxy: WeakMap<any, any>,
  toRaw: WeakMap<any, any>,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>
) {
  // ...判断 target 是否已被代理、已经是一个 Proxy 对象、是否在被代理的白名单中（如：VNode...）
  const handlers = collectionTypes.has(target.constructor)
    ? collectionHandlers
    : baseHandlers
  observed = new Proxy(target, handlers)
  toProxy.set(target, observed)
  toRaw.set(observed, target)
  return observed
}
```

## 推荐阅读

[getter 解析](./handler.md#createGetter) <!-- 具体文件可以使用 .md 结尾（推荐） -->
