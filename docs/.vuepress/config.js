const themeConfig = require('./configs/theme/')

module.exports = {
  base: '/vue-code/',
  title: 'vue-next code',
  description: 'vue-next code',
  markdown: {
    lineNumbers: true // 展示行号
  },
  theme: 'reco',
  themeConfig,
  // themeConfig: {
  //   // vssueConfig: {
  //   //   platform: 'github',
  //   //   owner: 'yesixuan',
  //   //   repo: 'vue-code',
  //   //   clientId: '43a8e5d8ab5db4be4c93',
  //   //   clientSecret: 'c1bb3d31de3b99540a2705b081c073dfc4191979'
  //   // },
  //   valineConfig: {
  //     // appId: 'urapuS9G9HaOnahE5Uj5cAXq-gzGzoHsz', // your appId
  //     // appKey: '5Hee4VSfOfqaD8DUn5JRFITy', // your appKey
  //     appId: 'jvc9s4BkJYQNOcpsbVTPMePe-gzGzoHsz',
  //     appKey: 'Js91M9DfM9vPwVaUj7xdkbxh',
  //     placeholder: '填写邮箱可以收到回复提醒哦！',
  //     notify: true,
  //     recordIP: true
  //   },
  //   // 博客配置
  //   // blogConfig: {
  //   //   category: {
  //   //     location: 2, // 在导航栏菜单中所占的位置，默认2
  //   //     text: '分类' // 默认文案 “分类”
  //   //   },
  //   //   tag: {
  //   //     location: 3, // 在导航栏菜单中所占的位置，默认3
  //   //     text: '标签' // 默认文案 “标签”
  //   //   }
  //   // }
  // }
};