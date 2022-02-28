import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'

import YDialog from '@/components/YDialog'
import YDialogComponent from '@/components/YDialogComponent.vue'

Vue.component(YDialog.name, YDialog);
Vue.component(YDialogComponent.name, YDialogComponent);

Vue.config.productionTip = false

const vm = new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

window.app =vm;
