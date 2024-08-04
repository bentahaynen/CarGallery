<template>
  <div class="home-view">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>En İyi Araçları Keşfedin</h1>
        <p>En yeni ve en popüler araç modellerimizle tanışın.</p>
        <button class="cta-button">Araçları Gör</button>
      </div>
    </section>

    <!-- Featured Vehicles Section -->
    <section class="featured-vehicles">
      <h2>Öne Çıkan Araçlar</h2>
      <div class="vehicle-cards">
        <!-- Araç kartları -->
        <div class="vehicle-card">
          <img src="@/assets/bmw.jpg" alt="Araç 1" />
          <h3>BMW</h3>
          <p>Bu araç modelinde yüksek performans ve konfor bir arada.</p>
          <button class="details-button">Detayları Gör</button>
        </div>
        <div class="vehicle-card">
          <img src="@/assets/mercesbenz.jpg" alt="Araç 2" />
          <h3>Mercedes</h3>
          <p>Şık tasarım ve son teknoloji özelliklerle dolu.</p>
          <button class="details-button">Detayları Gör</button>
        </div>
        <div class="vehicle-card">
          <img src="@/assets/astonmartin.jpg" alt="Araç 3" />
          <h3>Aston Martin</h3>
          <p>Konfor ve estetiği bir arada sunan mükemmel bir seçim.</p>
          <button class="details-button">Detayları Gör</button>
        </div>
        <div class="vehicle-card">
          <img src="@/assets/vosvos.jpg" alt="Araç 4" />
          <h3>Vosvos</h3>
          <p>Klasik araç tutkunlarının vazgeçilmez arabası.</p>
          <button class="details-button">Detayları Gör</button>
        </div>
        <div class="vehicle-card">
          <img src="@/assets/audir8.jpg" alt="Araç 5" />
          <h3>Audi</h3>
          <p>Üstün mühendislik ve modern tasarımın birleşimi.</p>
          <button class="details-button">Detayları Gör</button>
        </div>
        <div class="vehicle-card">
          <img src="@/assets/range.jpg" alt="Araç 6" />
          <h3>Range Rover</h3>
          <p>Performans ve lüksün mükemmel birleşimi.</p>
          <button class="details-button">Detayları Gör</button>
        </div>
      </div>
    </section>

    <!-- Advertisement Banner -->
    <section class="ad-banner">
      <div class="ad-content">
        <h2>Özel Teklif! Şimdi Satın Alın, 2025'de Ödemeye Başlayın.!</h2>
        <button class="ad-button">Detayları Gör</button>
      </div>
    </section>

    <!-- Customer Reviews Section -->
    <section class="customer-reviews">
      <h2>Müşteri Yorumları</h2>
      <div class="reviews">
        <div class="review-card">
          <p>"BMW, gerçekten mükemmel bir araç. Performansı harika ve konforlu!"</p>
          <div class="stars">★★★★★</div>
        </div>
        <div class="review-card">
          <p>"Mercedes'in şıklığı ve teknolojisi beni etkiledi. Kesinlikle tavsiye ederim."</p>
          <div class="stars">★★★★★</div>
        </div>
        <div class="review-card">
          <p>"Aston Martin'in tasarımı ve sürüş deneyimi benzersiz. Çok memnun kaldım."</p>
          <div class="stars">★★★★★</div>
        </div>
        <div class="review-card">
          <p>"Vosvos'un klasik havası harika. Herkesin sahip olmak isteyeceği bir araç."</p>
          <div class="stars">★★★★★</div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
};
</script>

<style scoped>
.home-view {
  font-family: Arial, sans-serif;
}

/* Hero Section */
.hero {
  position: relative;
  background: url('@/assets/heroarkaplan.jpg') no-repeat center center/cover;
  color: white;
  text-align: center;
  padding: 10px 20px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-content {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.6);
  padding: 20px;
  border-radius: 10px;
}

.hero h1 {
  font-size: 3em;
  margin: 0;
}

.hero p {
  font-size: 1.5em;
  margin: 20px 0;
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
  background-color: #e64a19;
}

/* Featured Vehicles Section */
.featured-vehicles {
  padding: 50px 20px;
  text-align: center;
}

.featured-vehicles h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.vehicle-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.vehicle-card {
  background-color: #f5f5f5;
  border-radius: 10px;
  padding: 20px;
  width: calc(33.333% - 40px); /* 3 kart yan yana */
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.vehicle-card img {
  width: 100%;
  border-radius: 10px;
}

.vehicle-card h3 {
  margin-top: 10px;
}

.details-button {
  background-color: #ff5722;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.details-button:hover {
  background-color: #e64a19;
}

/* Advertisement Banner Section */
.ad-banner {
  position: relative;
  background: url('@/assets/blackcar.jpg') no-repeat center center/cover;
  color: white;
  text-align: center;
  padding: 40px 20px;
  margin-top: 50px; /* Öne Çıkan Araçlar kısmının altından boşluk bırakır */
}

.ad-content {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.6); /* Yazılar ve butonlar için kontrast sağlar */
  padding: 20px;
  border-radius: 10px;
}

.ad-content h2 {
  font-size: 2em;
  margin: 0;
}

.ad-button {
  background-color: #ff5722;
  border: none;
  color: white;
  padding: 10px 20px;
  font-size: 1em;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
}

.ad-button:hover {
  background-color: #e64a19;
}

/* Customer Reviews Section */
.customer-reviews {
  padding: 50px 20px;
  background-color: #f0f0f0;
  text-align: center;
}

.customer-reviews h2 {
  font-size: 2.5em;
  margin-bottom: 20px;
}

.reviews {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.review-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 20px;
  width: calc(50% - 40px); /* 2 kart yan yana */
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
}

.stars {
  color: gold;
  font-size: 1.5em;
  margin-top: 10px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5em;
  }

  .hero p {
    font-size: 1.2em;
  }

  .cta-button {
    padding: 8px 16px;
    font-size: 0.9em;
  }

  .vehicle-cards {
    flex-direction: column;
    align-items: center;
  }

  .vehicle-card {
    width: 90%; /* Mobil cihazlarda tam genişlik */
    margin-bottom: 20px;
  }

  .review-card {
    width: 90%; /* Mobil cihazlarda tam genişlik */
    margin-bottom: 20px;
  }

  .ad-banner {
    padding: 20px 10px;
  }

  .ad-content {
    padding: 10px;
  }
}
</style>
