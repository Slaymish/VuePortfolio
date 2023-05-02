<template>
  <header>
    <h1 id="top"></h1>
    <div class="authBox">
      <div v-if="user">
        <p>Hello {{ user.displayName }}!</p>
        <VBtnSecondary
          @click="authSignOut()"
        >Sign out</VBtnSecondary>
      </div>
      <div v-else>
        <p>Not logged in</p>
        <VBtnSecondary @click="signInWithGoogle()">Sign in with Google</VBtnSecondary>
      </div>
    </div>
    <nav>
      <a href="#projects">Projects</a>
    </nav>
  </header>

  <DarkModeButton />

  <div class="container">
    <div id="about">
      <h1>Hi, I'm <span class="highlight">Hamish</span></h1>
      <TypeWriterAnimated />
      <br />
    </div>
    <div class="image">
      <img src="https://picsum.photos/200/200" alt="Random image" />
    </div>
    <div class="skills">
      <h1>Skills</h1>
      <br />
      <div class="skills-grid">
        <SkillHoverIcon
          name="co-blender"
          scale="5"
          text="Blender"
          url="https://www.blender.org/"
        />
        <SkillHoverIcon
          name="co-java"
          scale="5"
          text="Java"
          url="https://dev.java/"
        />
        <SkillHoverIcon
          name="co-html5"
          scale="5"
          text="HTML"
          url="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
        />
        <SkillHoverIcon
          name="md-css"
          scale="5"
          text="CSS"
          url="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <SkillHoverIcon
          name="co-vue-js"
          scale="5"
          text="Vue.js"
          url="https://vuejs.org/"
        />
        <SkillHoverIcon
          name="co-firebase"
          scale="5"
          text="Firebase"
          url="https://firebase.google.com/"
        />
      </div>
    </div>

  </div>


  <div class="container">
    <h1 id="projects">Projects</h1>
    <br />
    <div class="projects-grid">
      <!-- Loop through projectarray if size > 0 -->
      <CardComponent
        v-if="projectArray.length > 0"
        v-for="project in projectArray"
        :key="project.id"
        :title="project.title"
        :description="project.description"
        :link="project.url"
        :linkText="project.linkText"
      />

      <!-- If projectarray is empty, show skeleton cards -->
      <CardComponent
        v-else
        v-for="n in 8"
        :key="n"
        title="Loading..."
        description="Loading..."
        link="#"
        linkText="Loading..."
      />
    </div>
  </div>

  <ToTop @click = "scrollToTop()"/>
  

  <FooterComponent 
    email="mailto:hamishapps@gmail.com"
    github="https://github.com/Slaymish"
    instagram="https://www.instagram.com/hamishcreatingbadstuff/"
    linkedin="https://www.linkedin.com/in/hamish-burke-2301669a/"
  />


</template>

<script setup lang="ts">
import { OAuthProvider, ProviderId, signInWithPopup } from 'firebase/auth';
import CardComponent from './components/CardComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import { useFirebaseAuth } from 'vuefire';
import { useCurrentUser } from 'vuefire'
import ToTop from './components/ToTop.vue'

import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'

import SkillHoverIcon from './components/SkillHoverIcon.vue'
import TypeWriterAnimated from './components/TypeWriterAnimated.vue'

// Dark mode button
import DarkModeButton from './components/DarkModeButton.vue'

// get projects from firestore
const db = getFirestore()
const projectArray = useCollection(collection(db, 'projects'))



const user = useCurrentUser()
const auth = useFirebaseAuth()

// make provider
const provider = new OAuthProvider(ProviderId.GOOGLE)

function scrollToTop() {
  // scroll to top smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

// sign in method
function signInWithGoogle() {
  console.log('signing in')
  if (!auth) return
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result)
    })
    .catch((error) => {
      console.log(error)
    })
}

// sign out method
function authSignOut() {
  if (!auth) return
  auth.signOut()
}
</script>


<style>
@import './assets/main.css';
@import './assets/theme.css';
#about {
  text-align: center;
}

.highlight {
  color: #00b4d8;
}

.skills {
  text-align: center;
  margin: 20px;
}

.skills-grid{
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 20px;
  justify-items: center;
  align-items: center;
}



.authBox {
  /* have auth box in top right corner */
  position: absolute;
  top: 0;
  right: 0;
  margin: 20px;

  /* make it a flexbox */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  /* make it a bit nicer */
  border-radius: 5px;
  padding: 10px;
  box-shadow: var(--card-shadow);
  background: var(--card-background);

  /* make it a bit nicer */
  transition: transform 0.2s ease-in-out; 

}

.image {
  text-align: center;
  width: 150px;
  height: 150px;
}

.image img {
  border-radius: 50%;
  width: 150px;
  height: 150px;
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
  grid-gap: 60px;
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
  color: var(--link-color);
}

nav a:hover {
  color: var(--link-hover-color);
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }

  .skills-grid {
    grid-template-columns: repeat(3, 1fr);
  }

  .authBox {
    position: relative;
    margin: 0;
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .image img {
    width: 150px;
    height: 150px;
  }

  .skills-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 320px) {
  .image img {
    width: 100px;
    height: 100px;
  }
}
</style>
