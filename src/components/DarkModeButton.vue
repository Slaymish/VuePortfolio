<script setup lang="ts">
import { ref, onMounted } from 'vue'

export type UserTheme = 'light' | 'dark'

const setTheme = (theme: UserTheme) => {
  localStorage.setItem('user-theme', theme)
  userTheme.value = theme
  document.documentElement.className = theme
}

const getTheme = (): UserTheme => {
  return localStorage.getItem('user-theme') as UserTheme
}

const toggleTheme = (): void => {
  const activeTheme = localStorage.getItem('user-theme')
  if (activeTheme === 'light') {
    setTheme('dark')
  } else {
    setTheme('light')
  }
}

const getMediaPreference = (): UserTheme => {
  const hasDarkPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
  if (hasDarkPreference) {
    return 'dark'
  } else {
    return 'light'
  }
}

const userTheme = ref<UserTheme>(getTheme() || getMediaPreference())

onMounted(() => setTheme(userTheme.value))
</script>

<script lang="ts">
import { OhVueIcon } from 'oh-vue-icons'

export default {
  name: 'DarkModeButton',
  components: {
    'v-icon': OhVueIcon
  }
}
</script>

<template>
  <div class="icon-wrapper">
    <button @click="toggleTheme">
      <span v-if="userTheme === 'dark'">
        <v-icon name="bi-lightbulb-fill" scale="1.5" />
      </span>
      <span v-if="userTheme === 'light'">
        <v-icon name="bi-lightbulb-off" scale="1.5" />
      </span>
    </button>
  </div>
</template>

<style scoped>
.icon-wrapper {
  position: absolute;
  top: 0;
  right: 0;
  margin: 10px;
  transition: all 0.1s ease-in-out;
}

@media (max-width: 600px) {
  .icon-wrapper {
    margin: 5px;
  }
}
</style>
