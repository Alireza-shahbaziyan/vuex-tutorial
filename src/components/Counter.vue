<template>
    <div class="h1" :style="{ color: $store.state.colorCode }">
      {{ $store.state.counter }}
    </div>
    <div>
      {{ $store.state.counter }} <sup>2</sup> ={{
        $store.getters.counterSquared
      }}
    </div>
</template>
<script>
    export default{
        name:"Counter"
    }
</script>