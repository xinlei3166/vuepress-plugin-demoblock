import { defineBuildConfig, BuildEntry } from 'unbuild'
// import { path } from '@vuepress/utils'
// import { findFiles, getDirname } from './src/utils'
// const __dirname = getDirname(import.meta.url)
// const clientFiles = findFiles(path.resolve(__dirname, 'src/client'))

export default defineBuildConfig({
  entries: [
    {
      input: 'src/node/index',
      name: 'node/index'
    },
    {
      input: 'src/client/',
      outDir: 'dist/client/'
    }
  ],
  clean: true,
  declaration: true,
  externals: ['vuepress-vite', 'vue', 'vue-router']
  // rollup: {
  //   emitCJS: true
  // }
})
