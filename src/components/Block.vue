<template>
  <div class="block text-center mx-auto my-5 shadow"
       v-if="showBlock"
       @click="stopTimer"
  >
    <h1>Click me</h1>
  </div>
</template>

<script>
export default {
  props: ['delay'],
  data() {
    return {
      showBlock: false,
      timer: null,
      reactionTime: 0,
    }
  },
  mounted() {
    setTimeout(() => {
      this.showBlock = true;
      this.startTimer();
    }, this.delay)
  },
  methods: {
    startTimer() {
      this.timer = setInterval( () => {
        this.reactionTime += 10;
      }, 10)
    },
    stopTimer() {
      clearInterval(this.timer);
      this.$emit('end', this.reactionTime);
    }
  }
}
</script>

<style>
  .block {
    max-width: 25rem;
    border-radius: 20px;
    background: #0faf87;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
  }
</style>
