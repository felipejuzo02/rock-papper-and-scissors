<template>
  <div class="header">
    <img alt="Vue logo" src="../assets/logo.svg" />

    <div class="header__scoreboard">
      <small>SCORE</small>
      <p class="header__points">{{ points }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    points: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.header {
  border: 2px solid $header-outline;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  width: 480px;
  padding: 12px 18px;
  color: $dark-text;

  &__scoreboard {
    background: $ligth-color;
    text-align: center;
    padding: 12px 32px;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &__points {
    font-size: 48px;
  }
}

@media only screen and (max-width: 600px) {
  .header {
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
  }
}
</style>