module.exports = {
  'zh': Object.assign({}, {
    '/views/vue-next/': [
      {
        title: '响应式',
        collapsable: false,
        children: [
          '',
          'reactive',
          'handler',
          'effect',
        ]
      },
      {
        title: '编译',
        collapsable: false,
        children: [
          '',
          // 'reactive',
        ]
      },
    ],
    '/categories/blog/': [{
      title: '博客',
      collapsable: true,
      children: [
        '',
        'test',
      ]
    }]
  }),
  'en': Object.assign({}, {
    '/en/views/vue-next/': [
      {
        title: 'reactivity',
        collapsable: false,
        children: [
          '',
          'reactive',
          'handler',
          'effect',
        ]
      },
      {
        title: 'compile',
        collapsable: false,
        children: [
          '',
          // 'reactive',
        ]
      },
    ],
    '/en/categories/blog/': [{
      title: 'Blog',
      collapsable: true,
      children: [
        '',
        'reactive',
      ]
    }]
  })
}