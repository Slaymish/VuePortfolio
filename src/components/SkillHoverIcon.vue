<template>
  <div class="icon-wrapper">
    <a :href="url" target="_blank" rel="noopener noreferrer">
      <div class="icon">
        <v-icon :name="name" :scale="scale" />
      </div>
      <div class="text">
        {{ text }}
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import { OhVueIcon } from 'oh-vue-icons'

export default {
  name: 'SkillHoverIcon',
  props: {
    name: String,
    scale: Number,
    text: String,
    url: String
  },
  components: {
    'v-icon': OhVueIcon
  }
}
</script>

<style scoped>
@import '../assets/theme.css';
.icon-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: margin-top 0.2s ease-in-out;
}
a {
  text-decoration: none;
  color: var(--main-color);
}

.icon-wrapper:hover {
  cursor: pointer;
  margin-top: -18px;
}

.text {
  text-align: center;
  font-size: 1rem;
}

@media screen and (max-width: 768px) {
  .icon-wrapper {
    margin: 0 5px;
  }

  .text {
    font-size: 0.8rem;
  }
}
</style>
