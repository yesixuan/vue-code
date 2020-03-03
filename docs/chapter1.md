### 第一章

```js
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