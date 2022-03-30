<template>
<div class="home">
  <div class="home__container">
    <header-score />
  </div>
    <rules class="home__rules" />
</div>
</template>

<script>
import Card from './components/Card.vue'
import HeaderScore from './components/Header.vue'
import Rules from './components/Rules.vue'

export default {
  components: {
    Card,
    HeaderScore,
    Rules
  }
}
</script>

<style lang="scss">
@import './src/scss/_variables.scss';

#app {
  font-family: 'Barlow Semi Condensed', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.home {
  width: 100%;
  height: 100vh;
  background: $background;

  &__container {
    max-width: 1366px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: 26px 0;
  }

  &__rules {
    position: absolute;
    bottom: 16px;
    right: 16px;
  }
}
</style>
