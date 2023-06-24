<script lang="ts">
export default {
  name: 'CardComponent',
  props: {
    description: String
  }
}
</script>

<template>
  <div class="card-box">
    <div class="text-box">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<style scoped>
@import '../assets/theme.css';
.card-box {
  margin: 0 auto;
  width: 600px;
  padding: 40px;
  border-radius: 25px;
  background: var(--card-background);
  background-color: var(--fallback-background-color);
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease-in-out;
  color: var(--main-color);
}

/* make the text wrap so stays in box */
.text-box {
  word-wrap: break-word;
}

/** Media Queiries */

@media (max-width: 600px) {
  .card-box {
    width: 100%;
  }
}
</style>
