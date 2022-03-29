import { createApp } from 'vue'
import App from './App.vue'
import variables from './scss/_variables.scss'

const app = createApp(App)
app.use(variables)

app.mount('#app')
