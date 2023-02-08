import * as flowbite from 'flowbite/dist/flowbite.js';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(flowbite);
});