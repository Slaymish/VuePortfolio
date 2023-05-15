<template>
  <div class="next-section-button">
    <div>
      <!-- text above down arrow-->
      <a :href="linkto">
        <p>{{ section }}</p>
        <button>
          <v-icon name="md-keyboardarrowdown" scale="2" />
        </button>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { OhVueIcon } from 'oh-vue-icons'
import { MdKeyboardarrowdown } from 'oh-vue-icons/icons'

export default {
  name: 'NextSectionButton',
  components: {
    'v-icon': OhVueIcon
  },
  props: {
    section: String,
    linkto: String
  }
}
</script>

<style scoped>
@import '../assets/theme.css';
.next-section-button {
  position: absolute;
  bottom: 50px;
  z-index: 100;
  text-align: center;
  transition: margin 0.28s ease-in-out;
}

.next-section-button a {
  text-decoration: none;
  color: var(--main-color-soft);
  margin: auto;
  width: 100%;
  transition: 0.5s ease-in-out;
  transition: color 0.2s ease-in-out;
}

.next-section-button:hover {
  color: var(--main-color);
  margin-bottom: -10px;
}
</style>
