<<<<<<< HEAD
//main.js
import { createApp } from 'vue'
import App from './App.vue'
import { InitFirebasePlugin } from './src/index.js'
import firebaseConfig from './firebase.config.js'

const app = createApp(App)
app.use(InitFirebasePlugin, firebaseConfig)
app.mount('#app')
=======
import { createApp } from 'vue'
import App from './App.vue'
import FirebasePlugin from './src/index.js'
import firebaseConfig from './firebase.config.js'

const app = createApp(App)
app.use(FirebasePlugin, firebaseConfig)
app.mount('#app')
>>>>>>> e26821647e29a6b0279f024a371fca5c138bc110
