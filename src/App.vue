<template>
  <div id="app">
    <code-viewer :source="source" :show-code="false"></code-viewer>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      source: code_example,
    };
  },
};

const code_example = `<template>
  <div id="app">
    <img alt="Vue logo" class="logo" src="https://sfc.vuejs.org/logo.svg" />
    <h1>Welcome to Vue.js {{version}} !</h1>
    <div>element 2.x</div>   
    <el-row class="row"> 
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button> 
    </el-row>
    <div>Ant Design of Vue 1.x</div> 
    <div class="row"> 
      <a-button type="primary" :loading="loading" @mouseenter="enterLoading">
        mouseenter me!
      </a-button>
      <a-button type="primary" icon="poweroff" :loading="iconLoading" @click="enterIconLoading">
        延迟1s
      </a-button> 
      <a-button type="primary" loading />
      <a-button type="primary" shape="circle" loading />
      <a-button type="danger" shape="round" loading />
    </div>
    <div class="test" >scss support!</div>
    <div class="less-test" >less support!</div>
  </div>
</template> 
<script>
export default {
  data() {
    return {
      loading: false,
      iconLoading: false,
      version: '2.x'
    };
  },
  methods: {
    enterLoading() {
      this.loading = true;
    },
    enterIconLoading() {
      this.iconLoading = { delay: 1000 };
    },
  },
};
<\/script> 
<style> 
.row {
  padding:12px;
} 
  
.logo {
  width:66px;
}
</style> 
 
<style lang='scss' > 
$primary-color: red;

.test{ 
  color: $primary-color;
  font-size:32px;
}
</style> 
<style lang='less' > 

@base:20px;
@height: @base+5px; 

.less-test {
  background:rgb(100 82 86); 
  height: @height;
  font-size:32px;
  color: blue;
}
</style> `;
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding: 32px;
}
</style>
