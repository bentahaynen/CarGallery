<template>
  <footer class="footer">
    <p>&copy; 2024 Araç Galerisi - Tüm Hakları Saklıdır</p>
  </footer>
</template>

<script>
export default {
  name: 'AppFooter'
};
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 5px;
  background-color: #000000;
  color: white;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer {
    font-size: 14px;
  }
}
</style>
