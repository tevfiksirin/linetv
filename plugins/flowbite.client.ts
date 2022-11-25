import * as flowbite from 'flowbite/src/flowbite.js';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(flowbite);
});