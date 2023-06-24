<template>
  <DarkModeButton />

  <div class="landing">
    <header>
      <h1 id="top"></h1>
      <nav>
        <a href="#projects">Projects</a>
      </nav>
    </header>
    <div id="about">
      <h1>Hi, I'm <span class="highlight">Hamish</span></h1>
      <TypeWriterAnimated />
    </div>

    <FooterComponent
      email="mailto:hamishapps@gmail.com"
      github="https://github.com/Slaymish"
      instagram="https://www.instagram.com/hamishcreatingbadstuff/"
      linkedin="https://www.linkedin.com/in/hamish-burke-2301669a/"
    />

    <NextSectionButton section="skills" linkto="#skills" />
  </div>

  <div class="container">
    <!-- Container for skills -->
    <div class="skills">
      <div class="skill-header">
        <div class="skill-header-text">
          <h1 id="skills">About</h1>
          <div v-if="content.length > 0">
            <BoxComponent :description="content[0].skillpargraph" />
          </div>

          <div v-else>
            <BoxComponent description="Loading..." />
          </div>
        </div>
      </div>
      <div class="skills-grid" v-if="skillicons.length > 0">
        <SkillHoverIcon
          v-for="skill in skillicons"
          :key="skill.id"
          :name="skill.name"
          :scale="skill.scale"
          :text="skill.text"
          :url="skill.url"
        />
      </div>
      <div v-else class="skills-grid">
        <SkillHoverIcon
          v-for="n in 9"
          :key="n"
          name="Loading..."
          :scale=7
          text="Loading..."
          url="#"
        />
      </div>
    </div>
  </div>

  <div class="spacer"></div>

  <div class="container projectwrap">
    <!-- Container for projects -->
    <h1 id="projects">Projects</h1>
    <br />
    <div>
      <!-- Loop through projectarray if size > 0 -->
      <div v-if="projectArray.length > 0" class="projects-grid">
        <CardComponent
          v-for="project in projectArray"
          :key="project.id"
          :title="project.title"
          :description="project.description"
          :link="project.url"
          :linkText="project.linkText"
        />
      </div>
      <div v-else class="projects-grid">
        <CardComponent
          v-for="n in 9"
          :key="n"
          title="Loading..."
          description="Loading..."
          link="#"
          linkText="Loading..."
        />
      </div>
      <!-- If projectarray is empty, show skeleton cards -->
    </div>
  </div>

  <ToTop @click="scrollToTop()" />

  <FooterComponent
    email="mailto:hamishapps@gmail.com"
    github="https://github.com/Slaymish"
    instagram="https://www.instagram.com/hamishcreatingbadstuff/"
    linkedin="https://www.linkedin.com/in/hamish-burke-2301669a/"
  />
</template>

<script setup lang="ts">
// get projects from firestore
import { useCollection } from 'vuefire'
import { collection } from 'firebase/firestore'
import { getFirestore } from 'firebase/firestore'

import SkillHoverIcon from './components/SkillHoverIcon.vue'
import TypeWriterAnimated from './components/TypeWriterAnimated.vue'

// Dark mode button
import DarkModeButton from './components/DarkModeButton.vue'

// components
import NextSectionButton from './components/NextSectionButton.vue'
import CardComponent from './components/CardComponent.vue'
import BoxComponent from './components/BoxComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import ToTop from './components/ToTop.vue'

// get projects from firestore
const db = getFirestore()
const projectArray = useCollection(collection(db, 'projects'))

// get skill paragraph from firestore
const skillicons = useCollection(collection(db, 'skill-icons'))
const content = useCollection(collection(db, 'content'))

// store skillicon length in a variable
let skilliconsLength = skillicons.value.length === 1 ? 1 : 2

// log skillicons length
console.log(skilliconsLength)

function scrollToTop() {
  // scroll to top smoothly
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style>
@import './assets/main.css';
@import './assets/theme.css';

#about {
  text-align: center;
  margin: 20px;
  font-size: 3.5rem;
  transform: all 0.3s ease-in-out;
}

.highlight {
  color: #00b4d8;
}

.skills {
  text-align: center;
  margin: 20px;
  height: 100vh;
  display: flex;
  width: 100%;
}

.spacer {
  height: 50px;
}

.skill-header {
  margin: 0;
  padding: 0;
  font-size: 3.5rem;
  text-align: center;
  margin-bottom: 20px;
  width: 50vw;
}

.skill-header p {
  font-size: 1.5rem;
}

.skills-grid {
  display: grid;
  /* use skillicons.length to determine how many columns */
  grid-template-columns: repeat(v-bind(skilliconsLength), 1fr);
  grid-gap: 20px;
  align-content: center;
  width: 50vw;
}

.skill-header-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.landing {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 60px;
}

header {
  position: absolute;
  top: 5px;
  justify-content: center;
  align-items: center;
  margin: 20px;
  text-align: center;
}

nav a {
  margin: 0;
  text-decoration: none;
  color: var(--link-color);
}

nav a:hover {
  color: var(--link-hover-color);
}

#projects {
  text-align: center;
  margin-top: 30px;
}

@media (max-width: 1500px) {
  .skills {
    flex-direction: column;
    height: 100vh;
  }

  .skill-header {
    width: 100%;
  }

  .skills-grid {
    grid-template-columns: repeat(v-bind(skilliconsLength), 1fr);
    width: 100%;
    margin-top: 10vh;
  }

  .spacer {
    height: 300px;
  }
}

@media (max-width: 1350px) {
  .projects-grid{
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 1000px) {
  #about {
    font-size: 2.5rem;
  }

  .skill-header {
    font-size: 2.5rem;
    width: 100%;
  }

  .skills-grid {
    grid-template-columns: repeat(v-bind(skilliconsLength), 1fr);
    width: 100%;
  }

  .projects-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: repeat(1, 1fr);
  }

  .skills-grid {
    grid-template-columns: repeat(v-bind(skilliconsLength), 1fr);
  }

  .container .projectwrap {
    margin-top: 100px;
  }

  .spacer {
    height: 350px;
  }
}

@media (max-width: 480px) {
  .skill-header {
    font-size: 2rem;
    width: 100%;
  }

  .skills-grid {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }

  .skill-header-text {
    width: 100%;
  }

  .skill-header-text p {
    font-size: 1rem;
    margin-top: 30px;
  }

  .skill-header-text h1 {
    font-size: 2rem;
  }

  .spacer {
    height: 440px;
  }

  #projects {
    margin-top: 50px;
    font-size: 2rem;
  }
}
</style>
