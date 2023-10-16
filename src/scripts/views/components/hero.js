/* eslint-disable linebreak-style */
import UrlParser from '../../routes/url-parser';

class Hero extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="../styles/hero.css">
    <div class="hero">
        <div tabindex="0" class="hero_inner">
            <h1 class="hero_title">SELAMAT MENCARI KEHIDUPAN</h1>
            <p class="hero_tagline">Makan wajib, tempat bagus bonus</p>
        </div>
    </div>
  `;
  }

  async afterRender(){

  }
}

customElements.define('my-hero', Hero);
