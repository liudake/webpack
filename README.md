### 赢财富自定义的vue-cli模板

  在使用vue-cli的过程中，常用的webpack模板只为我们提供最基础的内容，但每次需要新建一个项目的时候就需要把之前项目的一些配置都搬过来，这样就造成挺大的不方便，如果是作为一个团队，那么维护一个通用的模板，我认为是挺有必要的。   

下面介绍自定义vue-cli模板

#### 特性

- 完善 webpack 各种全面提速优化
- 定义 内部常用的项目目录
- 配置 多环境
- 支持 vue全家桶

#### 安装
```shell
vue init liudake/webpack#vcyf projectName
```
#### 版本支持
```shell
vue 2.5.1  webpack 3.6  vue-cli 2.8
```
#### 常用的项目目录（src目录核心）

```shell
|-- build                            	// webpack配置文件
|   |-- webpack.dll.conf.js             //  DllPlugin和DllReferencePlugin预编译库文件
|-- config                           	// 项目打包路径
|   |-- dev.env.js                      //  本地环境配置
|   |-- ppe.env.js                      //  预生产环境配置
|   |-- prod.env.js                     //  生产环境配置
|   |-- sit.env.js                      //  测试环境配置
|   |-- test.env.js                     //  单元测试环境配置
|-- src                              	// 源码目录
|   |-- api                          	// 接口
|       |-- config.js                 // 接口配置文件
|       |-- http.js                   // 接口请求类型文件
|       |-- interceptors.js           // 请求时拦截器和响应时拦截器
|   |-- assets                       	// 图片资源文件
|   |-- common                       	// 全局配置
|       |-- fonts                       // 图标
|       |-- image                       // 图片
|       |-- js                          // 常用业务逻辑
|       |-- less                      // 常用CSS样式
|   |-- components                   	// 公共业务组件     
|   |-- router                       	// Vue 路由
|       |-- index.js
|   |-- store                        	// Vuex Store文件
|       |-- actions.js                  // 所有的多次操作管理
|       |-- getters.js                  // 所有的映射管理
|       |-- index.js                    // 状态管理入口
|       |-- mutation-type.js            // 配置相关的名称
|       |-- mutations.js                // 需要更改的操作管理 
|       |-- state.js                    // 所有状态管理
|   |-- App.vue                      	// App入口文件
|   |-- main.js                      	// 程序入口文件，加载Vuex,Vue-router等插件
|-- .babelrc                         	// ES6语法编译配置
|-- .editorconfig                    	// 代码编写规格
|-- .eslintignore                    	// Eslint 忽略的文件
|-- .eslintrc.js                     	// EsLint 配置
|-- .gitignore                       	// git ingnore
|-- README.md                        	// README
|-- index.html                       	// 入口html文件
|-- package.json                     	// 项目及工具的依赖配置文件
```

#### webpack全面提速优化
- 按需引用
```shell
通过借助插件babel-plugin-import可以实现按需加载组件
```
- 启用source-map配置
- 启用DllPlugin和DllReferencePlugin预编译库文件

#### 配置多环境

不同环境调用不同的接口，分为开发环境，测试环境，预生产环境，生产环境

启动开发环境(常用)
```shell
npm run dev
```
打包到测试环境（常用）
```shell
npm run build:sit
```
打包到预生产环境(不常用)
```shell
npm run build:ppe
```
将第三方资源分离打包，提高打包速度（不常用）
```shell
npm run build:dll
```
打包到生产环境(不常用)
```shell
npm run build
```
