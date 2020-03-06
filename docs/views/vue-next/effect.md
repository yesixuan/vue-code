# effect

vue-next 中的依赖收集通过显式调用它提供的`effect`方法来启动。

## usage

```ts
const { reactive, effect } from 'vue

const obj = reactive({ foo: 0 })
effect(() => {
  console.log(obj.foo)
})
// output 0
obj.foo++
// output 1
```

## effect 函数

主要做两件事：1. 包装 fn 生成 Effect；2. 调用 Effect 的 run 方法  

```ts {10,13}
function effect<T = any>(
  fn: () => T,
  options: ReactiveEffectOptions = EMPTY_OBJ
): ReactiveEffect<T> {
  // 如果传入的函数已经是一个 Effect 对象
  if (isEffect(fn)) {
    fn = fn.raw
  }
  // 包装原始函数，生成 Effect 对象（实际上就是在 fn 上面个添加一些静态属性）
  const effect = createReactiveEffect(fn, options)
  if (!options.lazy) {
    // 这一步真正调用传入的函数，触发了 getter
    effect()
  }
  return effect
}
```

## createReactiveEffect

创建 `effect` 函数，往 `effect` 上面加上一些静态属性

```ts
function createReactiveEffect<T = any>(
  fn: () => T,
  options: ReactiveEffectOptions
): ReactiveEffect<T> {
  // 依赖收集过程中 args 是没有的
  // 但是用户是可以拿到返回出去的 effect 进而手动调用，传入参数
  const effect = function reactiveEffect(...args: unknown[]): unknown {
    return run(effect, fn, args)
  } as ReactiveEffect
  effect._isEffect = true
  effect.active = true
  effect.raw = fn
  // effect函数中依赖的数据列表（响应数据中也会有一份 effects 的引用。它们是属于多对多的关系）
  effect.deps = []
  effect.options = options
  return effect
}
```

## run

1. 只有当 `effect` 中调用的 `fn` 才会触发依赖追踪（手动调用 `effect` 返回的函数以及 `setter` 触发的调用都不进行依赖收集）  
2. 保存 `effect` `引用（track` 是需要用到）  
3. 调用 `fn` 触发 `getter`  

```ts {16,18}
function run(effect: ReactiveEffect, fn: Function, args: unknown[]): unknown {
  // 使用 effect(Function) 收集依赖时（effect.active === true）才会继续
  // 下面条件在 fn = effect(Function); fn() 下会为真
  if (!effect.active) {
    return fn(...args)
  }
  if (!effectStack.includes(effect)) {
    // 清空 effect.deps 中的响应式数据
    cleanup(effect)
    try {
      enableTracking()
      effectStack.push(effect)
      // 这一步引用指向很重要，因为在真正进行 track 的时候，
      // 需要将 activeEffect 添加到响应式数据的 effects 列表中，
      // 最后在 setter 被触发之后，挨个儿调用 effect
      activeEffect = effect
      // 在这里触发了 getter，进而开始 track
      return fn(...args)
    } finally {
      effectStack.pop()
      resetTracking()
      activeEffect = effectStack[effectStack.length - 1]
    }
  }
}
```

## track 依赖追踪

1. 找依赖的响应对象
2. 找响应对象的键对应的依赖列表
3. `activeEffect.deps` 中添加 `Set<Effect>`

```ts {15,16}
function track(target: object, type: TrackOpTypes, key: unknown) {
  if (!shouldTrack || activeEffect === undefined) {
    return
  }
  let depsMap = targetMap.get(target)
  if (depsMap === void 0) {
    targetMap.set(target, (depsMap = new Map()))
  }
  let dep = depsMap.get(key)
  if (dep === void 0) {
    depsMap.set(key, (dep = new Set()))
  }
  if (!dep.has(activeEffect)) {
    // 将 activeEffect 添加进依赖列表
    dep.add(activeEffect)
    activeEffect.deps.push(dep)
    if (__DEV__ && activeEffect.options.onTrack) {
      // 触发 onTrack 钩子函数
      activeEffect.options.onTrack({
        effect: activeEffect,
        target,
        type,
        key
      })
    }
  }
}
```
