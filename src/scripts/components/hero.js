class Hero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../styles/hero.css">
        <!-- Hero Element -->
        <div class="hero">
            <div tabindex="0" class="hero_inner">
                <h1 class="hero_title">Selamat Datang Di <span class="hero_bold">IC Resto</span></h1>
                <p class="hero_tagline">Kurus dan gendut adalah pilihan tapi makan enak adalah kebutuhan!</p>
                <a href="#main-content" class="hero_button">Baca Selengkapnya...</a>
            </div>
        </div>
      `;
  }
}

customElements.define('my-hero', Hero);