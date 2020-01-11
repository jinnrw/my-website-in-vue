import Vue from 'vue'
import App from './App.vue'
import VueGtag from "vue-gtag";
import router from './router'
// import VueFire from 'vuefire'
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

Vue.use(VueGtag, {
  config: { id: "UA-156025191-1" }
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
