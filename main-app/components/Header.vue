<template>
  <div class="navigation">
    Header
    <NuxtLink v-for="menuItem in menuLinks" :key="menuItem.linkLabel" :to="menuItem.url">
      {{menuItem.linkLabel}}

    </NuxtLink>
  </div>
</template>
<script>
export default {
  name: "HeaderComponent",
  data() {
    return {
      menuLinks:[  {
          linkLabel: "Home",
          url:'/home'
        },
        {
          linkLabel: "Sub App",
          url:'/subapp'
        }
      ]
    }
  },
  head() {
    return {
      title: "Prismic Nuxt.js Multi Page Website",
    };
  },
};
</script>
<style scoped>
.navigation{
  background-color: cadetblue;
  height: 100px;
}
</style>
