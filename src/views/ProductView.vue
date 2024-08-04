<template>
  <div class="product-view">
    <Navbar /> <!-- Navbar bileşeni -->

    <main class="product-content">
      <section class="main-container">
        <!-- Kategoriler Bölümü -->
        <aside class="category-sidebar">
          <input type="text" id="category-search" v-model="searchQuery" placeholder="Araç veya kategori ara" class="search-input"/>
          <h2 @click="clearFilter">Kategoriler</h2>
          <ul class="category-list">
            <li
              v-for="category in filteredCategories"
              :key="category"
              :class="{ active: selectedCategory === category || (selectedVehicle && category === selectedVehicle.category) }"
              @click="filterByCategory(category)"
            >
              {{ category }}
            </li>
          </ul>
        </aside>

        <!-- Araçlar Bölümü -->
        <section class="vehicle-section">
          <div class="vehicle-grid" v-if="!selectedVehicle">
            <div
              v-for="vehicle in filteredVehicles"
              :key="vehicle.id"
              class="vehicle-card"
              @click="selectVehicle(vehicle)"
            >
              <img :src="vehicle.image" alt="Vehicle Image" class="vehicle-image"/>
              <h3>{{ vehicle.name }}</h3>
              <p>{{ vehicle.description }}</p>
              <p class="vehicle-price">{{ vehicle.price }}</p>
              <button class="cta-button">Detayları Gör</button>
            </div>
          </div>

          <!-- Detaylı Kart Bölümü -->
          <section class="detail-overlay" v-if="selectedVehicle">
            <div class="detail-card">
              <button class="close-button" @click="deselectVehicle">X</button>
              <div class="detail-content">
                <img :src="selectedVehicle.image" alt="Vehicle Image" class="detail-image" />
                <div class="detail-info">
                  <h3>{{ selectedVehicle.name }}</h3>
                  <p>{{ selectedVehicle.description }}</p>
                  <p class="detail-price">{{ selectedVehicle.price }}</p>
                  <!-- Detaylı Kart için özellikler burada yer alabilir -->
                  <div class="vehicle-features">
                    <h4>Özellikler:</h4>
                    <ul>
                      <li v-for="(feature, index) in selectedVehicle.features" :key="index">{{ feature }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </section>
    </main>
    <AppFooter /> <!-- Footer bileşeni -->
  </div>
</template>

<script>
import carCard1 from '@/assets/cla180.jpg';
import carCard2 from '@/assets/cla200.jpg';
import carCard3 from '@/assets/glc.jpg';
import carCard4 from '@/assets/eqe.jpg';
import carCard5 from '@/assets/rs8.jpg';
import carCard6 from '@/assets/rs7.jpg';
import carCard7 from '@/assets/q8.jpg';
import carCard8 from '@/assets/tt.jpg';
import carCard9 from '@/assets/xc90.jpg';
import carCard10 from '@/assets/xc60.jpg';
import carCard11 from '@/assets/s90.jpg';
import carCard12 from '@/assets/s60.jpg';

export default {
  data() {
    return {
      selectedCategory: '',
      selectedVehicle: null,
      searchQuery: '', // Arama sorgusu için veri
      categories: ['Sedan', 'SUV', 'Hatchback', 'Coupe'],
      vehicles: [
        { 
          id: 1, 
          name: 'Mercedes CLA 180',
          description: 'Bu araç, mükemmel bir performans sunar.', 
          price: '1.900.000 TL', 
          image: carCard1, 
          category: 'Sedan',
          features: [
            'Özellik 1: Güçlü motor',
            'Özellik 2: Konforlu iç mekan',
            'Özellik 3: Yüksek yakıt verimliliği'
          ]
        },
        { 
          id: 2, 
          name: 'Mercedes CLA 200', 
          description: 'Bu araç, sportif sürüş için tasarlanmıştır..', 
          price: '2.150.000 TL',          
          image: carCard2, 
          category: 'SUV',
          features: [
            'Özellik 1: Geniş iç mekan',
            'Özellik 2: Yüksek tavan',
            'Özellik 3: Güçlü sürüş'
          ]
        },
        { 
          id: 3, 
          name: 'Mercedes GLC',
          description: 'Bu araç, sportif sürüş içindir. Maksimum hız.', 
          price: '3.500.000 TL', 
          image: carCard3, 
          category: 'Coupe',
          features: [
            'Özellik 1: Spor süspansiyon',
            'Özellik 2: Hızlı ivmelenme',
            'Özellik 3: Şık tasarım'
          ]
        },
        { 
          id: 4, 
          name: 'Mercedes EQE', 
          description: 'Bu araç, uzun yolculuklar için uygundur.', 
          price: '2.700.000 TL', 
          image: carCard4, 
          category: 'SUV',
          features: [
            'Özellik 1: Yüksek sürüş yüksekliği',
            'Özellik 2: Büyük yakıt tankı',
            'Özellik 3: Konforlu iç mekan'
          ]
        },
        { 
          id: 5, 
          name: 'Auidi RS8', 
          description: 'Bu araç, şehir içi kullanım için pratik bir seçenektir.', 
          price: '4.200.000 TL', 
          image: carCard5, 
          category: 'Sedan',
          features: [
            'Özellik 1: Kompakt boyut',
            'Özellik 2: Ekonomik yakıt tüketimi',
            'Özellik 3: Yüksek güvenlik özellikleri'
          ]
        },
        { 
          id: 6, 
          name: 'Auidi  RS7',          
          description: 'Bu araç, geniş aileler için idealdir. Yüksek Komforludur.', 
          price: '3.400.000 TL',          
          image: carCard6, 
          category: 'SUV',
          features: [
            'Özellik 1: Çoklu koltuk seçeneği',
            'Özellik 2: Yüksek bagaj hacmi',
            'Özellik 3: Uzun yolculuklar için konfor'
          ]
        },
        { 
          id: 7, 
          name: 'Auidi Q8',
          description: 'Bu araç, şehir içi uygundur.', 
          price: '2.800.000 TL', 
          image: carCard7, 
          category: 'Hatchback',
          features: [
            'Özellik 1: Kompakt yapısı',
            'Özellik 2: Yüksek manevra kabiliyeti',
            'Özellik 3: Modern teknolojiler'
          ]
        },
        { 
          id: 8, 
          name: 'Audi TT', 
          description: 'Bu araç, uzun yolculuklar için tasarlanmıştır.', 
          price: '2.300.000 TL', 
          image: carCard8, 
          category: 'Sedan',
          features: [
            'Özellik 1: Rahat iç mekan',
            'Özellik 2: Yüksek yol tutuşu',
            'Özellik 3: Ekonomik yakıt tüketimi'
          ]
        },
        { 
          id: 9, 
          name: 'Volvo XC90', 
          description: 'Bu araç, sportif bir sürüş deneyimi sunar.', 
          price: '3.600.000 TL', 
          image: carCard9, 
          category: 'Coupe',
          features: [
            'Özellik 1: Yüksek performans',
            'Özellik 2: Şık tasarım',
            'Özellik 3: Güçlü motor'
          ]
        },
        { 
          id: 10, 
          name: 'Volvo XC60', 
          description: 'Bu araç, konforlu uzun yolculuklar için uygundur.', 
          price: '2.900.000 TL', 
          image: carCard10, 
          category: 'SUV',
          features: [
            'Özellik 1: Yüksek konfor',
            'Özellik 2: Geniş iç mekan',
            'Özellik 3: Modern teknoloji'
          ]
        },
        { 
          id: 11, 
          name: 'Volvo S90', 
          description: 'Bu araç, şehir içi kullanım için mükemmeldir.', 
          price: '2.500.000 TL', 
          image: carCard11, 
          category: 'Hatchback',
          features: [
            'Özellik 1: Küçük boyut',
            'Özellik 2: Ekonomik yakıt tüketimi',
            'Özellik 3: Kolay park edilebilirlik'
          ]
        },
        { 
          id: 12, 
          name: 'Volvo S60', 
          description: 'Bu araç, dinamik bir sürüş deneyimi sunar.', 
          price: '2.200.000 TL', 
          image: carCard12, 
          category: 'Sedan',
          features: [
            'Özellik 1: Spor süspansiyon',
            'Özellik 2: Hızlı ivmelenme',
            'Özellik 3: Şık iç tasarım'
          ]
        },
      ],
    };
  },
  computed: {
    filteredVehicles() {
      return this.vehicles.filter((vehicle) => {
        const matchesCategory = this.selectedCategory === '' || vehicle.category === this.selectedCategory;
        const matchesSearch = vehicle.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                              vehicle.category.toLowerCase().includes(this.searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
      });
    },
    filteredCategories() {
      return this.categories.filter((category) => {
        return category.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    },
  },
  methods: {
    selectVehicle(vehicle) {
      this.selectedVehicle = vehicle;
      this.selectedCategory = vehicle.category; // Kategoriyi güncelle
    },
    deselectVehicle() {
      this.selectedVehicle = null;
      this.selectedCategory = ''; // Kategoriyi sıfırla
    },
    filterByCategory(category) {
      this.selectedCategory = category;
    },
    clearFilter() {
      this.selectedCategory = '';
      this.searchQuery = '';
    },
    getVehicleImage(image) {
      return image;
    },
  },
};
</script>

<style scoped>
.product-view {
  background-color: black;
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Sayfanın tam yüksekliğinde olmasını sağlar */
}

.product-content {
  flex: 1; /* İçeriğin üstteki ve alttaki boşluklarla uyumlu olmasını sağlar */
  padding: 20px;
}

.main-container {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.category-sidebar {
  width: 250px;
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center; /* Kategoriler bölümündeki tüm yazıları ortalar */
}

.search-label {
  display: block;
  margin-bottom: 10px;
  font-size: 1em;
}

.search-input {
  text-align: center;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  border: 1px solid #ddd;
  margin-bottom: 20px;
}

.category-list {
  list-style: none;
  padding: 0;
}

.category-list li {
  cursor: pointer;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s ease;
}

.category-list li.active,
.category-list li:hover {
  background-color: #ff5722;
  color: black;
}

.vehicle-section {
  flex: 1;
}

.vehicle-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* Her satırda 4 kart gösterir */
  gap: 20px;
}

.vehicle-card {
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 25px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.vehicle-card:hover {
  transform: scale(1.02);
}

.vehicle-image {
  max-width: 100%;
  max-height: cover;
  object-fit: cover;
  border-radius: 10px;
}

.vehicle-price {
  font-size: 1.2em;
  color: #ff5722;
  margin: 10px 0;
}

.cta-button {
  background-color: #ff5722;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
}

.cta-button:hover {
  background-color: #000000;
}

/* Detaylı Kart Bölümü */
.detail-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.detail-card {
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  position: relative;
  max-width: 800px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
}

.close-button {
  position: absolute;
  top: 10px;
  right: 10px;
  background: #ff5722;
  color: white;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.detail-content {
  display: flex;
  gap: 20px;
}

.detail-image {
  max-width: 500px;
  border-radius: 10px;
}

.detail-info {
  max-width: 400px;
  text-align: center; /* Metinleri ortalar */
}

.vehicle-features {
  margin-top: 20px;
  text-align: center; /* Özellikleri ortalar */
}

.vehicle-features ul {
  padding: 0;
  list-style: none; /* Liste işaretlerini kaldırır */
  margin: 0;
}

.vehicle-features li {
  margin-bottom: 10px; /* Maddeler arasında boşluk */
}

</style>
