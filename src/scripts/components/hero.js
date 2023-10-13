class Hero extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../styles/hero.css">
        <div class="hero">
          <div class="hero__inner">
            <h1 class="hero__title">Bangun Karirmu Sebagai Developer Profesional</h1>
            <p class="hero__tagline">
              Jadilah tuan rumah di negeri sendiri dengan belajar langsung dari para inovator
              dan developer expert
            </p>
          </div>
        </div>
      `;
    }
  }
  
  customElements.define('my-hero', Hero);