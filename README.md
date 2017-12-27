### 赢财富自定义的vue-cli模板

在使用vue-cli的过程中，常用的webpack模板只为我们提供最基础的内容，但每次需要新建一个项目的时候就需要把之前项目的一些配置都搬过来，这样就造成挺大的不方便，如果是作为一个团队，那么维护一个通用的模板，我认为是挺有必要的。   

下面介绍自定义vue-cli模板
#### 安装
```shell
vue init liudake/webpack#vcyf projectName
```
#### 版本支持
```shell
vue2.5.1  webpack3.6  vue-cli2.8
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
