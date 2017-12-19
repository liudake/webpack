<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
    <h2>赢财富项目文档介绍</h2>
    <ul>
      <li><span>拭目以待</span></li>
    </ul>
    <h2>开源插件文档</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">vue</a></li>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/axios/axios" target="_blank">axios</a></li>
      <li><a href="https://webpack.js.org/" target="_blank">webpack</a></li>
      <li><a href="http://lesscss.cn/" target="_blank">less</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloYcf',
  data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
    return {
      msg: '欢迎来到赢财富 Vue.js App'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a, span{
  color: #42b983;
}
</style>
