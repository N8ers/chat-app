import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { 
  faUserFriends, 
  faSignOutAlt,
  faPaperPlane,
  faComments,
  faCoffee,
  faMinus,
  faTimes,
  faPlus, 
  faCog } from '@fortawesome/free-solid-svg-icons'

library.add(faUserFriends, faSignOutAlt, faPaperPlane, faComments, faCoffee, faMinus, faTimes, faPlus, faCog)

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(store)
  .use(router)
  .mount('#app')
