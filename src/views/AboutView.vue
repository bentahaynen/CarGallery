<template>
  <div class="about-us-container">
    <MainNavbar /> <!-- Navbar bileşeni -->

    <main class="content">
      <section class="section history">
        <div class="card history-card">
          <h2>Şirket Tarihçesi</h2>
          <p>Şirketimiz, 20XX yılında otomotiv sektöründe kaliteli hizmet sunma amacıyla kurulmuştur. O günden bu yana, müşterilerimize en iyi araçları sunarak büyümeye devam ediyoruz. Sektördeki tecrübemiz ve yenilikçi yaklaşımımızla sürekli olarak kendimizi geliştiriyoruz.</p>
        </div>
      </section>

      <section class="section mission-vision">
        <div class="mission">
          <div class="card">
            <h2>Misyonumuz</h2>
            <p>Müşterilerimize en kaliteli araçları en uygun fiyatlarla sunmak ve müşteri memnuniyetini en üst düzeyde tutmaktır. Sektördeki en son yenilikleri takip ederek, her zaman müşteri odaklı bir yaklaşım sergiliyoruz.</p>
          </div>
        </div>
        <div class="vision">
          <div class="card">
            <h2>Vizyonumuz</h2>
            <p>Otomotiv sektöründe lider konuma gelmek ve yenilikçi çözümlerle sektöre yön vermektir. Geleceğin otomotiv teknolojilerini yakından takip ederek, sürdürülebilir ve yenilikçi projelere imza atmayı hedefliyoruz.</p>
          </div>
        </div>
      </section>
    </main>

    <!-- Arka plan videosu -->
    <video class="background-video" autoplay muted loop>
      <source src="@/assets/dikeymercedes.mp4" type="video/mp4">
      Your browser does not support the video tag.
    </video>
  </div>
</template>

<style scoped>
.about-us-container {
  margin-top: 0; /* Margin ayarını sıfırladık */
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* Sayfanın tam yüksekliğinde olmasını sağlar */
  position: relative; /* Arka plan videosunu konumlandırmak için */
  overflow: hidden; /* Videonun taşmasını engeller */
}

.content {
  padding: 20px;
  max-width: 1200px; /* Sayfanın genişliğini sınırlayın */
  margin: 0 auto; /* Sayfayı ortalayın */
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* İçeriğin videoların önünde olmasını sağlar */
  z-index: 1; /* Videoların altında görünmesini sağlar */
}

.section {
  width: 100%;
  margin-bottom: 60px;
}

.card {
  background-color: rgba(255, 255, 255, 0.9); /* Hafif şeffaf arka plan */
  border-radius: 12px;
  padding: 30px;
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
  max-width: 800px; /* Kart genişliğini sınırlayın */
  margin: 0 auto;
}

.card:hover {
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
}

.card h2 {
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 20px;
  text-align: center;
}

.card p {
  font-size: 18px;
  line-height: 1.6;
  color: #34495e;
}

.mission-vision {
  display: flex;
  justify-content: space-between;
  gap: 20px;
}

.mission, .vision {
  flex: 1;
}

.background-video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh; /* Sayfanın tam yüksekliği */
  object-fit: cover;
  z-index: 0; /* İçeriğin video üzerinde görünmesini sağlar */
}

@media (max-width: 1024px) {
  .background-video {
    display: none; /* Daha küçük ekranlarda videoyu gizleyin */
  }
}
</style>
