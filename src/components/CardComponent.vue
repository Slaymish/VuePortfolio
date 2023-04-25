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
    <v-card width="400">
      <template v-slot:title>
        {{ title }}
      </template>

      <template v-slot:subtitle>
        {{ description }}
      </template>

      <v-card-actions>
        <VBtnSecondary :href="link">
          {{ linkText }}
        </VBtnSecondary>
      </v-card-actions>
    </v-card>
</template>

<style scoped>
    v-card {
        margin: 0 auto;
    }
</style>
