<template>
    <div class="scroll-to-top">
        <button @click="scrollToTop()">
          <v-icon 
          name="hi-solid-arrow-up" 
          scale="2"
          />
        </button>
    </div> 
</template>

<script lang="ts">
import { OhVueIcon } from 'oh-vue-icons'
import { HiSolidArrowUp } from "oh-vue-icons/icons";

export default {
    name: 'ToTop',
    components: {
        "v-icon": OhVueIcon
    }
}


</script>

<style scoped>
.scroll-to-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 99;
}

.scroll-to-top:hover {
  cursor: pointer;
  transform: scale(1.2);
  transition: all 0.1s ease-in-out;
}

@media screen and (max-width: 768px) {
  .scroll-to-top {
    bottom: 10px;
    right: 10px;
  }
}
    
</style>