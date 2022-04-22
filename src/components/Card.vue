<template>
  <div class="card" :class="propertiesCard[cardType].classes" @click="$emit('clickCard', cardType)">
    <img class="card__image" :src="propertiesCard[cardType].image" :alt="propertiesCard[cardType].name">
  </div>
</template>

<script>
export default {
  props: {
    cardType: {
      type: String,
      default: 'paper',
      required: true
    }
  },

  computed: {
    propertiesCard () {
      return {
        rock: {
          name: 'Rock',
          image: '../src/assets/icon-rock.svg',
          classes: 'card--bg-rock'
        },
        paper: {
          name: 'Paper',
          image: '../src/assets/icon-paper.svg',
          classes: 'card--bg-paper'
        },
        scissors: {
          name: 'scissors',
          image: '../src/assets/icon-scissors.svg',
          classes: 'card--bg-scissors'
        },
      }
    }
  }
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.card {
  width: 190px;
  height: 190px;
  border-radius: 50%;
  box-shadow: inset 0 -9px 2px rgba($color: #000000, $alpha: .3);
  position: relative;

  &--bg-rock {
    background: $rock;
  }

  &--bg-scissors {
    background: $scissors;
  }

  &--bg-paper {
    background: $paper;
  }

  &__image {
    background: $ligth-color;
    width: 62px;
    height: 62px;
    padding: 38px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    box-shadow: inset 0 9px 2px rgba($color: #000000, $alpha: .2);
  }
}

</style>