import App from '@/App.vue'
import Components from '@/components/ui'

import { createApp } from 'vue'

import { registerPlugins } from '@/plugins'

import '@/style.css'

const app = createApp(App)
registerPlugins(app)

console.log(Components)
Object.entries(Components).forEach(([componentName, component]) => app.component(componentName, component))

app.mount('#app')
