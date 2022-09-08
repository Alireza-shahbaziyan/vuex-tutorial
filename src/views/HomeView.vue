<template>
  <img alt="Vue logo" src="../assets/logo.png" />
  <Counter />
  <Button />
  <Input />
  <div class="my-4">
    <input type="text" placeholder="Color code" v-model="colorCode" />
  </div>
</template>

<script>
import Counter from "@/components/Counter.vue";
import Button from "@/components/Button.vue";
import Input from "@/components/Input.vue";

export default {
  name: "HomeView",
  computed: {
    colorCode: {
      get() {
        return this.$store.state.colorCode;
      },
      set(value) {
        return this.$store.dispatch("setColorCode", value);
      },
    },
  },
  components: {
    Counter,
    Button,
    Input,
  },
};
</script>
