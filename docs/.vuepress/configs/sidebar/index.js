module.exports = {
  'zh': Object.assign({}, {
    '/views/vue-next/': [{
        title: '基础',
        collapsable: false,
        children: [
          '',
          'test',
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
    '/en/views/vue-next/': [{
        title: 'Basic',
        collapsable: false,
        children: [
          '',
          'test',
        ]
      },
    ],
    '/en/views/plugins/': [{
      title: 'Plugins',
      collapsable: true,
      children: [
        '',
        'test',
      ]
    }]
  })
}