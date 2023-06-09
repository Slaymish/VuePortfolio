// Vue
import { createApp } from 'vue'
import App from './App.vue'

// Vuefire
import { VueFire, VueFireAuth } from 'vuefire'
import { firebaseApp } from './firebase'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VBtn } from 'vuetify/components'

// Icons
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { MdEmailRound } from 'oh-vue-icons/icons'
import { BiGithub } from 'oh-vue-icons/icons'
import { BiInstagram } from 'oh-vue-icons/icons'
import { CoLinkedin } from 'oh-vue-icons/icons'
import { HiSolidArrowUp } from 'oh-vue-icons/icons'

// skill icons
import { CoBlender } from 'oh-vue-icons/icons'
import { CoJava } from 'oh-vue-icons/icons'
import { CoVueJs } from 'oh-vue-icons/icons'
import { CoHtml5 } from 'oh-vue-icons/icons'
import { MdCss } from 'oh-vue-icons/icons'
import { CoFirebase } from 'oh-vue-icons/icons'
import { MdKeyboardarrowdown } from 'oh-vue-icons/icons'
import { CoPython } from 'oh-vue-icons/icons'

// dark mode
import { BiLightbulbFill } from 'oh-vue-icons/icons' //day
import { BiLightbulbOff } from 'oh-vue-icons/icons' //night

addIcons(
  MdEmailRound,
  BiGithub,
  BiInstagram,
  CoLinkedin,
  HiSolidArrowUp,
  CoBlender,
  CoJava,
  CoVueJs,
  CoHtml5,
  MdCss,
  CoFirebase,
  BiLightbulbFill,
  BiLightbulbOff,
  MdKeyboardarrowdown,
  CoPython
)

// themes
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'dark'
  },
  aliases: {
    VBtnSecondary: VBtn,
    VBtnTertiary: VBtn
  },
  defaults: {
    VBtn: {
      color: 'primary',
      variant: 'text'
    },
    VBtnSecondary: {
      color: 'secondary',
      variant: 'flat'
    },
    VBtnTertiary: {
      rounded: true,
      variant: 'plain'
    }
  }
})

// create vue app
const app = createApp(App)

// use vuefire
app
  .use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()]
  })
  .use(vuetify)

app.component('v-icon', OhVueIcon)
app.mount('#app')
