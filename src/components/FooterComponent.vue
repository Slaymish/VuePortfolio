<script lang="ts">
import { OhVueIcon } from 'oh-vue-icons'
import { MdEmailRound } from 'oh-vue-icons/icons'
import { BiGithub, BiInstagram } from 'oh-vue-icons/icons'
import { CoLinkedin } from 'oh-vue-icons/icons'

export default {
  name: 'FooterComponent',
  components: {
    'v-icon': OhVueIcon
  },
  props: ['email', 'github', 'instagram', 'linkedin']
}
</script>

<template>
  <div class="footer-wrapper">
    <div class="footer__socials">
      <a :href="email" target="_blank">
        <v-icon name="md-email-round" scale="2" />
      </a>
      <a :href="github" target="_blank">
        <v-icon name="bi-github" scale="2" />
      </a>
      <a :href="instagram" target="_blank">
        <v-icon name="bi-instagram" scale="2" />
      </a>
      <a :href="linkedin" target="_blank">
        <v-icon name="co-linkedin" scale="2" />
      </a>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/theme.css';
.footer-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
  width: 100%;
  color: var(--main-color);
}

.footer__socials {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.footer__socials a {
  color: var(--main-color);
  font-size: 1.5rem;
}

v-icon {
  font-size: 1.5rem;
}

.footer__socials a:hover {
  color: var(--link-hover-color);
}
</style>
