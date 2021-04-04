import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'

import employee from "./components/view/employee.vue"
import dashboard from "./components/view/dashboard.vue"
import report from "./components/view/report.vue"
import customer from "./components/view/customer.vue"
import system from "./components/view/system.vue"
import buy from "./components/view/buy.vue"



Vue.config.productionTip = false
const routes =[
  {path:"/employee",component:employee},
  {path:"/dashboard",component:dashboard},
  {path:"/report",component:report},
  {path:"/customer",component:customer},
  {path:"/system",component:system},
  {path:"/buy",component:buy}
]; 

const router = new VueRouter({
  routes
}); 

Vue.use(VueRouter);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
