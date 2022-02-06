<template>
  <h1>Reaction Timer with Vite</h1>
  <button class="btn btn-primary rounded-pill mt-5 px-5 mb-5 text-capitalize fs-5"
          @click="start"
          :disabled="isPlaying">
    play
  </button>
  <Block v-if="isPlaying" :delay="delay" @end="endGame"/>
  <Results :score="score" v-if="showResults"/>
</template>

<script>
import Block from '@/components/Block.vue'
import Results from '@/components/Results.vue'

export default {
  name: 'App',
  components: {
    Block,
    Results,
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
      score: null,
      showResults: false,
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      this.showResults = false;
    },
    endGame(reactionTime) {
      this.score = reactionTime;
      this.isPlaying = false;
      this.showResults = true;
    }
  }
}
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 100px;
}
</style>
