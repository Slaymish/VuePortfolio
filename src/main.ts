import { createApp } from 'vue'
import { VueFire, VueFireAuth } from 'vuefire'
import App from './App.vue'
import { firebaseApp } from './firebase'

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { VBtn } from 'vuetify/components'

import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdEmailRound } from "oh-vue-icons/icons";
import { BiGithub } from "oh-vue-icons/icons";
import { BiInstagram } from "oh-vue-icons/icons";
import { CoLinkedin } from "oh-vue-icons/icons";
import { HiSolidArrowUp } from "oh-vue-icons/icons";

addIcons(MdEmailRound, BiGithub, BiInstagram, CoLinkedin, HiSolidArrowUp);


// themes
const vuetify = createVuetify({
  components,
  directives,
  theme: {
    defaultTheme: 'light'
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

// Initialize Firebase
const app = createApp(App)

app.use(VueFire, {
    firebaseApp,
    modules: [VueFireAuth()]
  }).use(vuetify)

app.component("v-icon", OhVueIcon);
app.mount('#app')
