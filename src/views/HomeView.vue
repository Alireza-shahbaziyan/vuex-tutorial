<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <div class="h1" :style="{ color: $store.state.colorCode }">
      {{ $store.state.counter }}
    </div>
    <div>
      {{ $store.state.counter }} <sup>2</sup> ={{
        $store.getters.counterSquared
      }}
    </div>
    <div>
      <button
        @click="$store.dispatch('reduceCounter')"
        class="btn btn-lg btn-outline-dark mx-2"
      >
        -
      </button>
      <button
        @click="$store.dispatch('addCounter')"
        class="btn btn-lg btn-outline-dark mx-2"
      >
        +
      </button>
    </div>
    <div class="my-4">
      <input type="text" placeholder="Color code" v-model="colorCode" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  computed: {
    colorCode: {
      get() {
        this.$store.state.colorCode;
        console.log('get');
      },
      set(value) {
        console.log('send');
        this.$store.commit("changeColor", value);
      },
    },
  },
};
</script>
