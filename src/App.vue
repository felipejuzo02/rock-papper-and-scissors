<template>
<div class="home">
  <div class="home__container">
    <header-score :points="points" />
  </div>

  <div class="home__content">
    <game @addPoint="addPoint" @removePoint="removePoint" />
  </div>

  <rules @openRules="openRulesModal" class="home__rules" />
  <modal-rules ref="rulesModal" @closeModal="closeRulesModal" />
  <div :class="openedModalClasses" />
</div>
</template>

<script>
import Game from './components/Game.vue'
import HeaderScore from './components/Header.vue'
import Rules from './components/Rules.vue'
import ModalRules from './components/ModalRules.vue'

export default {
  components: {
    Game,
    HeaderScore,
    Rules,
    ModalRules
  },

  data() {
    return {
      openedModal: false,
      points: 0
    }
  },

  computed: {
    openedModalClasses () {
      return this.openedModal && 'home__opened-modal'
    }
  },

  methods: {
    openRulesModal () {
      this.$refs.rulesModal.openModal()
      this.openedModal = true
    },

    closeRulesModal () {
      this.openedModal = false
    },

    addPoint () {
      this.points++
    },

    removePoint () {
      this.points--
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

  &__content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%)
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

@media only screen and (max-width: 600px) {
  .home {
    &__container {
      width: 98%;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      margin: 26px 0;
    }
  }
}
</style>
