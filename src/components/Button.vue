<template>
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
</template>
<script>
    export default{
        name:'Button'
    }
</script>