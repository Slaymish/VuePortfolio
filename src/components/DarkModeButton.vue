<script lang="ts">
    export default {
        name: 'DarkModeButton',
        props: {},
        methods: {
            toggleDarkMode() {
                this.$emit('toggleDarkMode')
            }
        }
    }
</script>

<template>
    <v-btn @click="toggleDarkMode">
        <v-icon>mdi-lightbulb-on</v-icon>
    </v-btn>
</template>

<style scoped>
    v-btn {
        margin: 0 auto;
    }
</style>