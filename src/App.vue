<template>
<div class="home">
  <div class="home__container">
    <header-score />
  </div>
  <rules @openRules="openRulesModal" class="home__rules" />
  <modal-rules ref="rulesModal" />

<div :class="openedModalClasses"/>
</div>
</template>

<script>
import Card from './components/Card.vue'
import HeaderScore from './components/Header.vue'
import Rules from './components/Rules.vue'
import ModalRules from './components/ModalRules.vue'

export default {
  components: {
    Card,
    HeaderScore,
    Rules,
    ModalRules
  },

  data() {
    return {
      openedModal: false
    }
  },

  computed: {
    openedModalClasses() {
      return false && 'home__opened-modal'
    }
  },

  methods: {
    openRulesModal(){
      this.$refs.rulesModal.openModal()
    }
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

  &__opened-modal {
    position: absolute;
    height: 100vh;
    z-index: 100;
    width: 100vw;
    background-color: rgba(0, 0, 0, .6);
  }
}
</style>
