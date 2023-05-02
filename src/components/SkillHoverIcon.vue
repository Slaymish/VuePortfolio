<template>
    <div class="icon-wrapper">
        <a 
        :href="url"
        target="_blank"
        rel="noopener noreferrer"
        >
            <div class="icon">
                <v-icon 
                :name="name" 
                :scale="scale"
                />
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
        scale: String,
        text: String,
        url: String
    },
    components: {
        "v-icon": OhVueIcon
    }
}

</script>

<style scoped>
.icon-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
    transition: all 0.1s ease-in-out;
}

a {
    text-decoration: none;
    color: #000;
}

.icon-wrapper:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: all 0.15s ease-in-out;
}

.text {
    text-align: center;
    font-size: 1rem;
    margin-top: 5px;
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