// import Vue from 'vue'
// import App from './App.vue'

import Vue from "vue";
// import Button from "ant-design-vue/lib/button";
// import "ant-design-vue/dist/antd.css";
import { Button , Layout , Menu , Icon , Row , Col } from 'ant-design-vue';
import App from "./App";


// Vue.component(Button.name, Button);
// Vue.component(Layout.name, Layout);
Vue.use(Button);
Vue.use(Layout);
Vue.use(Menu);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
