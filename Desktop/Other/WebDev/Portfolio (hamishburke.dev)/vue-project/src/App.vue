<template>
  <header>
    <h1 id="top"></h1>
    <nav>
      <a href="#top">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
    </nav>
  </header>
  
  <div class="container">
    <div id="about">
      <h1>Hi, I'm <span class="highlight">Hamish</span></h1>
      <p>I'm a software developer and 3d designer.</p>
    </div>
    <div class="image">
      <img src="https://picsum.photos/300/300" alt="Random image" />
    </div>
  </div>

  <div class="container">
    <h1 id="projects">Projects</h1>
    <div class="projects-grid">
      <CardComponent v-for="card in cards" :key="card.title" :title="card.title" :description="card.description" :link="card.link" :linkText="card.linkText" :image="card.image" />
    </div>
  </div>
  <FooterComponent
    email="hamishapps@gmail.com"
    githubName="hamishapps"
    instagramName="hamishapps"
    linkedinName="hamishapps"
    ></FooterComponent>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'
import CardComponent from './components/CardComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import DarkModeButton from './components/DarkModeButton.vue'


// setup card array from firebase data
const cards = [
  {
    title: 'Java GPT Assistant',
    description: 'AI program using OpenAI\'s GPT-4 and Whisper API, and TTS with elevenlabs.',
    link: 'https://github.com/Slaymish/Java-GPT-Assistant',
    linkText: 'View on GitHub',
    image: 'https://picsum.photos/300/300'
  },
  {
    title: 'Portfolio Website',
    description: 'My portfolio website built with Vue.js and firebase.',
    link: 'https://www.github.com',
    linkText: 'View on GitHub',
    image: 'https://picsum.photos/300/300'
  },
  {
    title: 'Absolution',
    description: 'Shortfilm created entirely in blender',
    link: 'https://www.youtube.com/watch?v=7Z9Z1Z1Z1Z1',
    linkText: 'Watch it here',
    image: 'https://picsum.photos/300/300'
  },
  {
    title: 'University Notes',
    description: 'My digital garden of notes for university courses.',
    link: 'https://my-digital-garden-beige.vercel.app/',
    linkText: 'View notes',
    image: 'https://picsum.photos/300/300'
  }
]

</script>

<style>
  @import './assets/main.css';

  #about {
    text-align: center;
  }

  .image {
    text-align: center;
  }

  .image img {
    border-radius: 50%;
    width: 200px;
    height: 200px;
  }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px;
  }

  .projects-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px;
  }

  nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px;
  }

  nav a {
    margin: 0 10px;
    text-decoration: none;
    color: #000;
  }

  nav a:hover {
    color: #eb5757;
  }

  

  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
    }
  }

  @media (max-width: 480px) {
    .image img {
      width: 150px;
      height: 150px;
    }
  }

  @media (max-width: 320px) {
    .image img {
      width: 100px;
      height: 100px;
    }
  }


</style>
