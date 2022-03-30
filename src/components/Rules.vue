<template>
  <div class="rules">
    <button class="rules__button">RULES</button>
  </div>
</template>

<style lang="scss">
@import '../scss/_variables.scss';

.rules {
  &__button {
    color: $ligth-color;
    background: transparent;
    border: 2px solid $header-outline;
    border-radius: 4px;
    padding: 6px 26px;
    transition: all 0.5s;

    &:hover {
      cursor: pointer;
      background: $ligth-color;
      color: $dark-text;
    }
  }
}
</style>