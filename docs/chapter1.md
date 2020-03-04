### js

```js {3,5,6}
function downloadImage(src, name) {
  const image = new Image();
  // 解决跨域 canvas 污染问题
  image.setAttribute('crossOrigin', 'anonymous');
  image.onload = function () {
    const canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    const context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, image.width, image.height);
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    const event = new MouseEvent('click');
    a.download = name || '图片';
    a.href = url;
    a.dispatchEvent(event);
  };
  image.src = src;
}
```

### ts
```ts
interface Ha {
  name: string
  age: number
}

const ha: Ha = {
  name: 'Vic',
  age: 28
}
```

### jsx
```jsx
const App = () => <>
  <Header props={{ name: 'Vic' }} />
</Header>
</>
```

### vue
```vue
<template>
  <div class="bg" @click="handleClose" v-if="visible">
    <section class="dialog" @click.stop>
      <span class="dialog__close" @click="handleClose">&times;</span>
      <footer class="dialog__footer" @click="handleSave">
        保存图片
      </footer>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
@w2: 75rem;
.dialog {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  width: 680/@w2;
  background-color: #fff;
  padding: 75/@w2 0;

  &__footer {
    width: 420/@w2;
    height: 84/@w2;
    line-height: 84/@w2;
    background-color: #0088ff;
    border-radius: 3/@w2;
    text-align: center;
    font-size: 32/@w2;
    color: #fff;
    margin-top: 20/@w2;
  }
}
</style>
```