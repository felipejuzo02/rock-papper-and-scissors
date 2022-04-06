<template>
  <div>
    <div v-if="!showResult" class="game">
      <card :card-type="'paper'" @clickCard="selectedCard" />
      <card :card-type="'scissors'" @clickCard="selectedCard" />
      <card :card-type="'rock'" @clickCard="selectedCard" />
    </div>

    <div v-else>
      <div class="game__result">
        <div>
          <p class="game__picked">YOU PICKED</p>
          <card :card-type="lastClick" />
        </div>

         <div>
           <p class="game__result-text">{{ result }}</p>
           <button @click="playAgain">PLAY AGAIN</button>
         </div>

        <div>
          <p class="game__picked">THE HOUSE PICKED</p>
          <card :card-type="randomChoice" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'

export default {
  components: {
    Card
  },

  data() {
    return {
      lastClick: '',
      randomChoice: '',
      showResult: false,
      result: ''
    }
  },

  methods: {
    selectedCard(value) {
      this.lastClick = value

      this.randomValue()
      this.resultGame()
    },

    playAgain() {
      this.showResult = false
    },

    randomValue() {
      const randomNumber = Math.floor(Math.random() * (3 - 0)) + 0
      const options = ['rock', 'paper', 'scissor']

      this.randomChoice = options[randomNumber]
    },

    setWinnerResult () {
      this.result = "YOU WIN"
      this.$emit('addPoint')
    },

    setLoserResult () {
      this.result = "YOU LOSE"
      this.$emit('removePoint')
    },

    setBreakEvenResult() {
      this.result = "TIED"
    },

    resultGame () {
      const myChoice = this.lastClick

      if(myChoice === 'paper') {
        if(this.randomChoice === 'rock') this.setWinnerResult()
        else if(this.randomChoice === 'paper') this.setBreakEvenResult() 
        else this.setLoserResult()
      } else if(myChoice === 'rock') {
        if(this.randomChoice === 'rock') this.setBreakEvenResult()
        else if(this.randomChoice === 'paper') this.setLoserResult()
        else this.setWinnerResult()
      } else {
        if(this.randomChoice === 'rock') this.setLoserResult()
        else if(this.randomChoice === 'paper') this.setWinnerResult() 
        else this.setBreakEvenResult()
      }

      this.showResult = true
    }
  }
}
</script>

<style lang="scss">
@import '../scss/_variables.scss';

.game {
  display: flex;
  justify-content: space-around;

  &__result {
    display: flex;
    align-items: center;
    text-align: center;
  }

  &__result-text {
    margin-bottom: 16px;
    font-size: 38px;
    color: $ligth-color;
  }

  &__picked {
    margin-bottom: 24px;
    font-size: 22px;
    color: $ligth-color;
  }
}
</style>