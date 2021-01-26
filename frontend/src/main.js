import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App).use(router)
app.mixin({
  data() {
    return {
      backend_api_root_url: 'http://localhost:3000/',
    }
  }
})
app.mount('#app')
