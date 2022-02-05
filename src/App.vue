<template>
  <h1>Reaction Timer with Vite</h1>
  <button class="btn btn-primary rounded-pill mt-5 px-5 text-capitalize fs-5"
          @click="start"
          :disabled="isPlaying">
    play
  </button>
  <Block v-if="isPlaying" :deplay="delay" />
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Block from './components/Block.vue'

export default {
  name: 'App',
  components: {
    Block
  },
  data() {
    return {
      isPlaying: false,
      delay: null,
    }
  },
  methods: {
    start() {
      this.delay = 2000 + Math.random() * 5000;
      this.isPlaying = true;
      // console.log(this.delay);
    }
  }
}
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444;
  margin-top: 60px;
}
</style>
