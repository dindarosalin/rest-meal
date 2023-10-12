class Hero extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../styles/hero.css">
        <div class="hero">hero</div>
      `;
    }
  }
  
  customElements.define('my-hero', Hero);