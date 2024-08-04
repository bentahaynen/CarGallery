<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/logo.jpg" alt="Logo" />
    </div>
    <button class="menu-toggle" @click="toggleMenu">
      <span class="menu-icon"></span>
      <span class="menu-icon"></span>
      <span class="menu-icon"></span>
    </button>
    <ul class="nav-links" :class="{ 'nav-active': isMenuActive }">
      <li><router-link to="/">Anasayfa</router-link></li>
      <li><router-link to="/products">Ürünlerimiz</router-link></li>
      <li><router-link to="/about">Hakkımızda</router-link></li>
      <li><router-link to="/contact">İletişim</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'MainNavbar',
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 60px;
  background-color: #000000;
  color: white;
  position: relative;
  z-index: 1000;
}

.logo img {
  height: 50px; /* Logo yüksekliğini ayarlayın */
  width: auto;
}

.menu-toggle {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
}

.menu-icon {
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition: 0.3s;
}

.nav-links {
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
}

.nav-links li {
  margin: 0 15px; /* Menü öğeleri arasındaki boşluğu ayarlayın */
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 1em;
  padding: 10px;
}

.nav-links a:hover {
  text-decoration: underline;
}

/* Responsive Design */
@media (max-width: 768px) {
  .menu-toggle {
    display: flex;
  }

  .nav-links {
    flex-direction: column;
    position: absolute;
    top: 60px;
    right: 0;
    background-color: #000000;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: height 0.3s ease;
  }

  .nav-links.nav-active {
    height: auto;
  }

  .nav-links li {
    margin: 15px 0;
    text-align: center;
  }

  .nav-links a {
    font-size: 1.2em;
  }

  .menu-icon {
    background-color: white;
  }
}
</style>
