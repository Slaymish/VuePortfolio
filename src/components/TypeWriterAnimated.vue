<template>
  <div class="container">
    <h1>
      <span class="typed-text">{{ typeValue }}</span>
      <span class="blinking-cursor">|</span>
      <span class="cursor" :class="{ typing: typeStatus }">&nbsp;</span>
    </h1>
  </div>
</template>

<script lang="ts">
export default {
  name: 'TypeWriterAnimated',
  data: () => {
    return {
      typeValue: '',
      typeStatus: false,
      displayTextArray: ['Programmer', '3D Designer', 'Web Developer', 'DMs Open..', 'Student'],
      typingSpeed: 100,
      erasingSpeed: 150,
      newTextDelay: 1300,
      displayTextArrayIndex: 0,
      charIndex: 0
    }
  },
  created() {
    setTimeout(this.typeText, this.newTextDelay + 200)
  },
  methods: {
    typeText() {
      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {
        if (!this.typeStatus) this.typeStatus = true
        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(this.charIndex)
        this.charIndex += 1
        setTimeout(this.typeText, this.typingSpeed)
      } else {
        this.typeStatus = false
        setTimeout(this.eraseText, this.newTextDelay)
      }
    },
    eraseText() {
      if (this.charIndex > 0) {
        if (!this.typeStatus) this.typeStatus = true
        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(
          0,
          this.charIndex - 1
        )
        this.charIndex -= 1
        setTimeout(this.eraseText, this.erasingSpeed)
      } else {
        this.typeStatus = false
        this.displayTextArrayIndex += 1
        if (this.displayTextArrayIndex >= this.displayTextArray.length)
          this.displayTextArrayIndex = 0
        setTimeout(this.typeText, this.typingSpeed + 1000)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
@import '../assets/theme.css';
.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
}
h1 {
  font-size: 1.7rem;
  font-weight: bold;
  span.typed-text {
    color: var(--main-color);
  }
}

// Cursor blinking CSS Starts...
.blinking-cursor {
  font-size: 1.7rem;
  font-weight: normal;
  color: var(--cursor-color);
  -webkit-animation: 1s blink step-end infinite;
  -moz-animation: 1s blink step-end infinite;
  -ms-animation: 1s blink step-end infinite;
  -o-animation: 1s blink step-end infinite;
  animation: 1s blink step-end infinite;
}
@keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: var(--cursor-color);
  }
}
@-moz-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: var(--cursor-color);
  }
}
@-webkit-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: var(--cursor-color);
  }
}
@-ms-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: var(--cursor-color);
  }
}
@-o-keyframes blink {
  from,
  to {
    color: transparent;
  }
  50% {
    color: var(--cursor-color);
  }
}
// Cursor blinking CSS Ends...
</style>
