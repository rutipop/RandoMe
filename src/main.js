import { createApp } from 'vue'
import App from './App.vue'
import VueClickAway from "vue3-click-away";
import VueConfetti from 'vue-confetti'

createApp(App).mount('#app')

const app = createApp(App);

app.use(VueConfetti)
app.use(VueClickAway) // Makes 'v-click-away' directive usable in every component
app.mount('#app')
