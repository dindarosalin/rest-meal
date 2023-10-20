/* eslint-disable linebreak-style */
class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    
    <div class="hero">
        <div tabindex="0" class="hero_inner">
            <h1 class="hero_title">SELAMAT MENCARI KEHIDUPAN</h1>
            <p class="hero_tagline">Makan wajib, tempat bagus bonus</p>
        </div>
    </div>
  `;
  }
}

customElements.define('my-hero', Hero);