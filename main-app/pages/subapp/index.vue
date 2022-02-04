<!--
Looking for more information about the Slice Zone? Here's the documentation about it:
https://www.slicemachine.dev/documentation/nuxt/add-the-slice-zone-to-your-page
-->
<template>
  <div>
    Sub App
    <div id="__subapp" key="subapp"></div>
  </div>
</template>

<script>
// This doesn't work either

// import {
//   registerApplication,
//   getAppNames,
//   start
// } from "single-spa";

export default {
  name: "SubAppPage",
  created() {
    // if (!getAppNames().includes("subapp")) {
    //   registerApplication({
    //     name: "subapp",
    //     app: async () => await import("../sub-app/_nuxt/subapp"),
    //     activeWhen: "/subapp",
    //   });
    //   start();
    // }
  },
  async beforeUnmount() {
    // await unloadApplication('subapp');
  },
};
</script>
