<template>
  <p> Reaction Time: {{ score }} ms</p>
  <p class="rank">
    Your rank:  {{ rank }}
  </p>

</template>

<script>
export default {
  name: 'Results',
  props: ['score'],
  data() {
    return {
      rank: null,
    }
  },
  mounted() {
    if (this.score < 250) {
      this.rank = 'Flash';
    } else if (this.score <= 500) {
      this.rank = 'Rabbit';
    } else {
      this.rank = 'Snail...';
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  margin: 50px auto;
  font-size: 20px;
  color: darkblue;
  &.rank {
    margin: 0 auto;
    font-size: 24px;
    color: orange;
    font-weight: bold;
  }
}
</style>
