/* eslint-disable */
import { registerApplication, start, getAppNames } from "single-spa";


  registerApplication({
    name: "subapp",
    app: async () => await import('../sub-app/_nuxt/subapp'),
    activeWhen: "/subapp",
  });

start();
