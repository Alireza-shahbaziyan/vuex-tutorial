import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    counter: 0,
    colorCode: 'red'
  },
  getters: {
    counterSquared(state) {
      return Math.pow(state.counter, 2)
    }
  },
  mutations: {
    addCounter(state, number) {
      state.counter += number
    },
    reduceCounter(state, number) {
      state.counter -= number
    },
    setColorCode(state, value) {
      state.colorCode = value
    }
  },
  actions: {
    addCounter() {
      axios('https://www.random.org/integers/?num=1&min=1&mhttps://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=newax=6&col=1&base=10&format=plain&rnd=new')
        .then(res => {
          this.commit('addCounter', res.data)
        })
    },
    reduceCounter() {
      axios('https://www.random.org/integers/?num=1&min=1&mhttps://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=newax=6&col=1&base=10&format=plain&rnd=new')
        .then(res => {
          this.commit('reduceCounter', res.data)
        })
    },
    setColorCode({commit},value){
      commit('setColorCode',value)
    }
  },
  modules: {
  }
})
