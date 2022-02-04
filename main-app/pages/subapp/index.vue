<!--
Looking for more information about the Slice Zone? Here's the documentation about it:
https://www.slicemachine.dev/documentation/nuxt/add-the-slice-zone-to-your-page
-->
<template>
  <div>
    Sub App
      <div id="__subapp" key="subapp"></div>
    <div id="__nuxt"></div>
  </div>
</template>

<script>
// import {
//   registerApplication,

//   getAppNames,
//   start
// } from "single-spa";

export default {
  name: "SubAppPage",
  mounted() {},
  async beforeUnmount() {
    // await unloadApplication('send-app');
  },
};
</script>
