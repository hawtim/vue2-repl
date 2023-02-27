import Vue from "vue";
import App from "./App.vue";
import CodeView from "vue-code-view";
import ElementUI from "element-ui";

import "element-ui/lib/theme-chalk/index.css";

Vue.config.productionTip = false;
Vue.use(CodeView);
// 引入组件 element 2.x
Vue.use(ElementUI);
// 引入组件 antd vue 1.x

new Vue({
  render: (h) => h(App)
}).$mount("#app");
