import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  srcDir: 'src/',
  modules: ['@nuxt/content'],
  imports: {
    autoImport: false
  },
  css: ['@/assets/styles/index.scss']
})
