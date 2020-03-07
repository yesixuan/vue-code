const nav = require('../nav/')
const sidebar = require('../sidebar/')
module.exports = {
  // 键名是该语言所属的子路径
  // 作为特例，默认语言可以使用 '/' 作为其路径。
  '/': {
    // 多语言下拉菜单的标题
    selectText: '选择语言',
    // 该语言在下拉菜单中的标签
    label: '简体中文',
    // 编辑链接文字
    editLinkText: '在 GitHub 上编辑此页',
    // Service Worker 的配置
    serviceWorker: {
      updatePopup: {
        message: "发现新内容可用.",
        buttonText: "刷新"
      }
    },
    nav: nav.zh,
    sidebar: sidebar.zh
  },
  '/en/': {
    selectText: 'Languages',
    label: 'English',
    editLinkText: 'Edit this page on GitHub',
    serviceWorker: {
      updatePopup: {
        message: "New content is available.",
        buttonText: "Refresh"
      }
    },
    nav: nav.en,
    sidebar: sidebar.en
  }
}
