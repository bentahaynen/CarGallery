<template>
    <div class="contact-container">
      <MainNavbar /> <!-- Navbar bileşeni -->
  
      <main class="content">
        <div class="form-card">
          <h1>İletişim Formu</h1>
          <form @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="firstName">Adınız :</label>
              <input type="text" id="firstName" v-model="form.firstName" placeholder="Adınızı girin" required />
            </div>
            <div class="form-group">
              <label for="lastName">Soyadınız :</label>
              <input type="text" id="lastName" v-model="form.lastName" placeholder="Soyadınızı girin" required />
            </div>
            <div class="form-group">
              <label for="email">E-mail Adresiniz :</label>
              <input type="email" id="email" v-model="form.email" placeholder="E-mail adresinizi girin" required />
            </div>
            <div class="form-group">
              <label for="message">Mesajınız :</label>
              <textarea id="message" v-model="form.message" placeholder="Mesajınızı yazın" required></textarea>
            </div>
            <button type="submit">Gönder</button>
          </form>
        </div>
      </main>
  
      <AppFooter /> <!-- Footer bileşeni -->
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        form: {
          firstName: '',
          lastName: '',
          email: '',
          message: ''
        }
      };
    },
    methods: {
      handleSubmit() {
        // Form gönderme işlemleri burada yapılacak
        console.log('Form submitted', this.form);
      }
    }
  }
  </script>
  
  <style scoped>
  .contact-container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
  }
  
  .content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    padding: 20px;
  }
  
  .form-card {
    background-color: #fff;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    max-width: 600px;
    width: 100%;
    margin: 0 auto;
  }
  
  h1 {
    font-size: 24px;
    color: #2c3e50;
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
    color: #34495e;
  }
  
  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    box-sizing: border-box;
  }
  
  input::placeholder, textarea::placeholder {
    color: #aaa;
  }
  
  textarea {
    resize: vertical;
    height: 150px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    border: none;
    border-radius: 8px;
    background-color: #3498db;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button:hover {
    background-color: #2980b9;
  }
  
  @media (max-width: 768px) {
    .form-card {
      padding: 15px;
    }
  
    h1 {
      font-size: 20px;
    }
  }
  </style>
  