<template>
  <div>
    <Header></Header>
    <Nuxt />
  </div>
</template>
<script>
  import Header from '../components/Header.vue'
  export default {
    name: "DefaultLayout",
    components: {
      Header
    }
  }

</script>

<style scoped>

</style>
