import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import VueFire from 'vuefire'
import firebase from 'firebase/app'
import 'firebase/firestore'
// import { config } from './firebaseConfig'
// Vue.use(VueFire)

// firebase.initializeApp(config);

// export const db = firebase.firestore()
// const settings = {
//   timestampsInSnapshots: true
// };
// db.settings(settings);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
