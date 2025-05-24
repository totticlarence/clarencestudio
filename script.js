/* === RESET & BASE === */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  background-color: #0d0d0d;
  color: #fff;
  line-height: 1.6;
  scroll-behavior: smooth;
}

.cta-button {
  display: inline-block;
  margin-top: 25px;
  padding: 12px 25px;
  background-color: #0ff;
  color: #000;
  font-weight: bold;
  border-radius: 30px;
  text-decoration: none;
  transition: background-color 0.3s ease, transform 0.3s ease;
}

.cta-button:hover {
  background-color: #00cccc;
  transform: scale(1.05);
}

/* Pour animation douce du titre */
.animate-title {
  animation: fadeIn 1.5s ease-in;
}
.animate-subtitle {
  animation: fadeIn 2s ease-in 0.5s;
}

/* === CONTAINERS GÉNÉRAUX === */
.container {
  width: 90%;
  max-width: 1200px;
  margin: auto;
  padding: 40px 0;
}


/* === HERO SECTION (bannière) === */
.hero {
  height: 100vh;
  background: url('banniere.jpg') no-repeat center center/cover;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
  position: relative;
}

.hero::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-content h1 {
  font-size: 3rem;
  color: #0ff;
  animation: fadeIn 2s ease-in;
}

.hero-content p {
  font-size: 1.2rem;
  margin-top: 20px;
  animation: fadeIn 2s ease-in 0.5s;
}

/* === SECTIONS (Nos secteurs & Nos services) === */
.section-title {
  text-align: center;
  font-size: 2rem;
  margin-bottom: 40px;
  color: #0ff;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 30px;
  animation: fadeUp 1.5s ease-in;
}

.card {
  background: #1a1a1a;
  border-radius: 15px;
  padding: 30px;
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 10px 15px rgba(0, 255, 255, 0.1);
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 30px rgba(0, 255, 255, 0.2);
}

.card i {
  font-size: 2.5rem;
  margin-bottom: 15px;
  color: #0ff;
}

 top: 10px;
  font-size: 1.1rem;
}

/* === PORTFOLIO === */
.portfolio {
  padding: 80px 0;
  background: #0d1117;
  color: #fff;
}

.section-title {
  text-align: center;
  margin-bottom: 40px;
}

.section-title h2 {
  font-size: 2.8rem;
  color: #1e90ff;
  margin-bottom: 10px;
}

.section-title p {
  font-size: 1.1rem;
  color: #ccc;
}

.portfolio-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 0 20px;
}

.portfolio-card {
  position: relative;
  width: 300px;
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.4);
  cursor: pointer;
  transition: transform 0.3s ease;
}

.portfolio-card:hover {
  transform: scale(1.05);
}

.portfolio-card img {
  width: 100%;
  height: 100%;
  display: block;
  transition: 0.3s ease;
  filter: brightness(0.8);
}

.portfolio-info {
  position: absolute;
  bottom: 0;
  background: rgba(0, 0, 0, 0.6);
  width: 100%;
  padding: 15px;
  text-align: center;
  color: #fff;
  font-weight: 600;
}

/* === COMPTEURS ANIMÉS === */
.counters {
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364);
  color: white;
  padding: 80px 0;
  text-align: center;
}

.counters .container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 40px;
}

.counter-box {
  flex: 1;
  min-width: 200px;
  max-width: 300px;
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s;
}

.counter-box:hover {
  transform: translateY(-10px);
}

.counter-box i {
  font-size: 3rem;
  margin-bottom: 15px;
  color: #1e90ff;
}

.counter-box h2 {
  font-size: 2.5rem;
  margin: 0;
}

/* === RESPONSIVE (Mobile) === */
@media (max-width: 768px) {
  .navbar {
    flex-direction: column;
    gap: 20px;
  }
  .hero-content h1 {
    font-size: 2rem;
  }
}

/* Section Hero avec image de fond */
.hero-blur {
  position: relative;
  height: 100vh;
  background-image: url('img/bg-accueil.jpg'); /* Remplace par ton image */
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Filtre sombre + flou animé */
.overlay-blur {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  backdrop-filter: blur(8px);
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
  animation: blurPulse 10s ease-in-out infinite;
}

/* Contenu au-dessus du flou */
.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  color: #fff;
}

/* Animation douce du flou */
@keyframes blurPulse {
  0%, 100% {
    backdrop-filter: blur(6px);
  }
  50% {
    backdrop-filter: blur(12px);
  }
}

/* Animation texte */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

/* === À PROPOS === */
.about {
  background-color: #0a0a0a;
  color: #f0f0f0;
  padding: 80px 20px;
}

.about-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  gap: 40px;
}

.about-text {
  flex: 1;
  min-width: 300px;
}

.about-text h2 {
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #1e90ff;
}

.about-text p {
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 20px;
  color: #ccc;
}

.about-img {
  flex: 1;
  text-align: center;
  min-width: 280px;
}

.about-img img {
  max-width: 100%;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

/* Section Nos Tarifs */
.tarifs-section {
  background: #0b0b0b;
  padding: 80px 20px;
  color: #fff;
  text-align: center;
}

.tarif-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
  margin-top: 50px;
}

.tarif-card {
  background: #151515;
  padding: 40px 25px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.4);
  width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.tarif-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 24px rgba(30, 144, 255, 0.4);
}

.tarif-card .icon {
  font-size: 2.5rem;
  color: #1e90ff;
  margin-bottom: 20px;
}

.tarif-card h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: #f1f1f1;
}

.tarif-card ul {
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
}

.tarif-card ul li {
  margin-bottom: 10px;
  font-size: 1rem;
  color: #ccc;
}

.btn-blue {
  background: linear-gradient(135deg, #1e90ff, #0077cc);
  color: #fff;
  padding: 10px 22px;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
}

.btn-blue:hover {
  transform: scale(1.05);
  background: linear-gradient(135deg, #0077cc, #1e90ff);
}

/* Section Contact */
.contact-section {
  background: #0e0e0e;
  color: #f1f1f1;
  padding: 80px 20px;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 50px;
  align-items: start;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-form .form-group {
  width: 100%;
}

.contact-form input,
.contact-form textarea {
  background: #1a1a1a;
  border: 1px solid #333;
  border-radius: 10px;
  padding: 15px;
  color: #fff;
  font-size: 1rem;
}

.contact-form input:focus,
.contact-form textarea:focus {
  outline: none;
  border-color: #1e90ff;
  box-shadow: 0 0 0 2px rgba(30, 144, 255, 0.3);
}

.btn-blue {
  background: linear-gradient(135deg, #1e90ff, #0077cc);
  color: #fff;
  padding: 12px 25px;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  gap: 10px;
  transition: transform 0.3s ease;
}

.btn-blue:hover {
  transform: translateY(-3px);
}

.contact-infos h3 {
  margin-bottom: 15px;
  font-size: 1.3rem;
  color: #1e90ff;
}

.contact-infos ul {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
}

.contact-infos ul li {
  margin-bottom: 12px;
  font-size: 1rem;
}

.contact-infos ul i {
  color: #1e90ff;
  margin-right: 10px;
}

.social-links a {
  color: #fff;
  font-size: 1.5rem;
  margin-right: 15px;
  transition: color 0.3s;
}

.social-links a:hover {
  color: #1e90ff;
}

.map-container {
  margin-top: 20px;
  width: 100%;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid #333;
}

.map-container iframe {
  width: 100%;
  height: 100%;
  border: none;
}

/* Footer global */
.footer {
  background: linear-gradient(to right, #0f0f0f, #1a1a1a);
  color: #ccc;
  padding: 60px 20px 30px;
  font-size: 0.95rem;
}

.footer .container {
  max-width: 1200px;
  margin: auto;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 30px;
}

.footer-section {
  flex: 1 1 250px;
  min-width: 250px;
}

.footer-section h2.logo {
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 15px;
}

.footer-section h3 {
  font-size: 1.2rem;
  color: #fff;
  margin-bottom: 15px;
}

.footer-section p {
  color: #aaa;
  line-height: 1.6;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 10px;
}

.footer-section ul li a {
  color: #ccc;
  text-decoration: none;
  transition: color 0.3s;
}

.footer-section ul li a:hover {
  color: #1e90ff;
}

/* Icônes réseaux */
.social-icons a {
  font-size: 1.5rem;
  color: #fff;
  margin-right: 15px;
  transition: transform 0.3s, color 0.3s;
}

.social-icons a:hover {
  color: #1e90ff;
  transform: scale(1.1);
}

/* Footer bottom */
.footer-bottom {
  text-align: center;
  margin-top: 40px;
  font-size: 0.85rem;
  color: #777;
  border-top: 1px solid #333;
  padding-top: 15px;
}