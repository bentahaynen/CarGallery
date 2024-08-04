<template>
    <div id="app">
      <Navbar />
      <router-view /> <!-- Bu, sayfa bileşenlerinin yerleştirileceği yerdir -->
      <AppFooter />
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue'; // Dosya yolunu ve ismini kontrol edin
  import AppFooter from '@/components/AppFooter.vue'; // Dosya yolunu ve ismini kontrol edin
  
  export default {
    components: {
      Navbar,
      AppFooter
    }
  }
  </script>
  
  <style>
  /* Stil buraya gelecek */
  </style>
  