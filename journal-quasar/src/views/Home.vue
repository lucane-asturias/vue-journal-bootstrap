<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <h1>Hola Mundo</h1>

    <button @click="goToDaybook" class="btn btn-primary">Primary</button>
    <button @click="goToDaybook" class="btn btn-secondary">Secondary</button>
    <button @click="goToDaybook" class="btn btn-success">Success</button>

  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const goToDaybook = () => {
      this.$router.push({ name: 'no-entry' })
    }

    return { goToDaybook }
  }
})
</script>