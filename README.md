# Vuepress-Plugin-Demoblock-Plus

## 简介

Vuepress-Plugin-Demoblock-Plus 是一个基于 Vuepress 的插件，它可以帮助你在编写文档的时候增加 Vue 示例，它的诞生初衷是为了降低编写组件文档时增加一些相关示例的难度。

使用 Vuepress 编写组件示例有以下不足之处：
  * 1.组件示例和示例代码本质上一样，却需要写两遍。
  * 2.Vuepress 无法渲染 Markdown 中的 script 和 style 代码块。

Vuepress-Plugin-Demoblock-Plus 参考了 [Element UI](https://github.com/element-plus/element-plus) 的文档渲染，实现了和它一样的，可在 Markdown 中直接编写示例的语法。

[查看Demo](https://xinlei3166.github.io/vuepress-demo/)



## 安装

```bash
npm install vuepress-plugin-demoblock-plus
yarn add vuepress-plugin-demoblock-plus
```



## 用法

.vuepress/config.js文件中使用插件

```js
plugins: [
	['vuepress-plugin-demoblock-plus']
]
```


markdown 中的vue代码被编译为了 vue 函数组件，需要把 import 转换为 require，这里可附加一些其他的转换。
```js
plugins: [
  ['vuepress-plugin-demoblock-plus', {
    scriptImports: [
      { searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
        replaceValue: 'const { defineComponent: _defineComponent } = Vue'
      }
    ]
  }]
]
```



多语言支持(默认是中文)

```js
const locales = {
  '/': {
    'hide-text': 'Hide',
    'show-text': 'Expand',
    'copy-button-text': 'Copy'
  },
   '/zh': {
    'hide-text': '隐藏代码',
    'show-text': '显示代码',
    'copy-button-text': '复制代码片段'
  }
}

plugins: [
	['vuepress-plugin-demoblock-plus', { locales }]
]
```

