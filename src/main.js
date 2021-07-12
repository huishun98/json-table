import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// import VueGtag from "vue-gtag";
import VueAnalytics from 'vue-analytics';

// Vue.use(VueGtag, {
//   config: { id: "UA-201887797-1" }
// });

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
  id: 'UA-201887797-1',
  router
});

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
