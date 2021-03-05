import { createApp, App as Application } from 'vue'
import App from './App.vue'
import { router, routerHistory } from './router';


declare global {
    interface Window {
      // h: HTML5History
      h: typeof routerHistory
      r: typeof router
      vm: ReturnType<Application['mount']>
    }
}

window.h = routerHistory
window.r = router


const app = createApp(App)
// app.provide('state', globalState)
app.use(router)

window.vm = app.mount('#app');
