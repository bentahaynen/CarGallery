import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProductView from '@/views/ProductView.vue';
import AboutView from '@/views/AboutView.vue';
import ContactView from '@/views/ContactView.vue';

// Rota tanımları
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/products',
    name: 'products',
    component: ProductView
  },

  {
    path: '/about',
    name: 'about',
    component: AboutView
  },

  {
    path: '/contact',
    name: 'contact',
    component : ContactView
  }
  // Diğer rotalarınızı buraya ekleyebilirsiniz
];

// Router oluşturma
const router = createRouter({
  history: createWebHistory('/'), // Burada BASE_URL yerine '/' kullanıyoruz
  routes
});

export default router;
