<script lang="ts">
    export default {
        name: 'FooterComponent',
        props: {
            email: String,
            githubName: String,
            instagramName: String,
            linkedinName: String,
        }
    }
</script>

<template>
    <div class="footer-wrapper">
        <div class="footer">
            <div class="footer__socials">
                <a :href="'mailto:' + email" target="_blank" rel="noopener noreferrer">
                    <v-icon>mdi-email</v-icon>
                </a>
                <a :href="'https://www.github.com/' + githubName" target="_blank" rel="noopener noreferrer">
                    <v-icon>mdi-github</v-icon>
                </a>
                <a :href="'https://www.instagram.com/' + instagramName" target="_blank" rel="noopener noreferrer">
                    <v-icon>mdi-instagram</v-icon>
                </a>
                <a :href="'https://www.linkedin.com/in/' + linkedinName" target="_blank" rel="noopener noreferrer">
                    <v-icon>mdi-linkedin</v-icon>
                </a>
            </div>
        </div>
    </div>
</template>