import Vue from 'vue'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit,faTrash} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import VueConfirmDialog from 'vue-confirm-dialog'
import Router from './router/index'

Vue.use(VueConfirmDialog)
Vue.component('vue-confirm-dialog', VueConfirmDialog.default)
library.add(faEdit,faTrash)
Vue.component('font-awesome-icon', FontAwesomeIcon)
new Vue({
  el: '#app',
  router: Router,
  render: h => h(App)
})
