<template>
  <div class="header">
    <img alt="Vue logo" src="../assets/logo.svg" />

    <div class="scoreboard">
      <small>SCORE</small>
      <p>0</p>
    </div>
  </div>
</template>

<style lang="scss">
@import '../scss/_variables.scss';

.header {
  border: 2px solid red;
  display: flex;
  justify-content: space-between;
  max-width: 480px;
  padding: 12px 18px;
}
</style>