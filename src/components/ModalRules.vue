<template>
  <div v-if="modelModal" class="modal-rules" v-on="$listenner" v-bind="$attrs">
    <div class="modal-rules__header">
      <p>RULES</p>
      <button class="modal-rules__button" @click="closeModal">X</button>
    </div>
    <img alt="Vue logo" src="../assets/image-rules.svg" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      modelModal: false
    }
  },

  methods: {
    openModal() {
      this.modelModal = true
    },

    closeModal() {
      this.modelModal = false
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.modal-rules {
  background: $ligth-color;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 36px;
  border-radius: 12px;
  z-index: 1000;

  &__header {
    display: flex;
    justify-content: space-between;
    padding-bottom: 36px;
    font-size: 32px;
    color: $dark-text;
    font-weight: 700;
  }

  &__button {
    background: transparent;
    border: none;
    font-size: 26px;
    color: gray;
    transition: all 0.3s;

    &:hover {
      background: $dark-text;
      color: $ligth-color;
      cursor: pointer;
    }
  }
}
</style>