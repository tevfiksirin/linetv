// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss', 
  [
    '@nuxtjs/google-fonts',
    {
      preload: true,
      families: {
         'Raleway': {
            wght: [300, 400, 500, 600, 800],
          },
          subsets: 'latin-ext',
      },
    },
  ],
  ],
  plugins: ['@/plugins/flowbite.client.ts'],


})
