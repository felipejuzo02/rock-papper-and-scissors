<template>
<div class="home">

  <header-score />
</div>
</template>

<script>
import Card from './components/Card.vue'
import HeaderScore from './components/Header.vue'

export default {
  components: {
    Card,
    HeaderScore
  }
}
</script>

<style lang="scss">
@import './src/scss/_variables.scss';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.home {
  width: 100%;
  height: 100vh;
}
</style>
