<script lang="ts">
export default {
  name: 'CardComponent',
  props: {
    title: String,
    description: String,
    link: String,
    linkText: String,
    image: String
  }
}
</script>

<template>
  <v-card class="mx-auto">
    <template v-slot:title>
      {{ title }}
    </template>

    <template v-slot:subtitle>
      {{ description }}
    </template>

    <v-card-actions>
      <VBtnSecondary :href="link" target="_blank">
        {{ linkText }}
      </VBtnSecondary>
    </v-card-actions>
  </v-card>
</template>

<style scoped>
@import '../assets/theme.css';
.mx-auto {
  margin: 0 auto;
  width: 400px;
  padding: 30px;
  border-radius: 25px;
  background: var(--card-background);
  background-color: var(--fallback-background-color);
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease-in-out;
  color: var(--main-color);
}

@media screen and (max-width: 798px) {
  .mx-auto {
    max-width: 700px;
    width: 100%;
  }
}
</style>
