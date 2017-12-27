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
#### 常用的项目目录（src核心）

```shell
src
├─api  //接口
├─assets //图片
├─common //公用
├─components  //公用业务组件
├─page  //路由页面
├─router //路由配置
└─store  //vuex

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
