/* eslint-disable linebreak-style */
class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    const heroDiv = document.createElement('div');
    heroDiv.classList.add('hero');

    const heroInnerDiv = document.createElement('div');
    heroInnerDiv.classList.add('hero_inner');
    heroInnerDiv.setAttribute('tabindex', '0');

    const title = document.createElement('h1');
    title.classList.add('hero_title');
    title.textContent = 'SELAMAT MENCARI KEHIDUPAN';

    const tagline = document.createElement('p');
    tagline.classList.add('hero_tagline');
    tagline.textContent = 'Makan wajib, tempat bagus bonus';

    heroInnerDiv.appendChild(title);
    heroInnerDiv.appendChild(tagline);
    heroDiv.appendChild(heroInnerDiv);

    // Set background image dynamically
    heroDiv.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../public/images/heros/hero-image_2.jpg")';
    heroDiv.style.backgroundPosition = 'center';
    heroDiv.style.backgroundSize = 'cover';
    heroDiv.style.zIndex = '-1';

    this.appendChild(heroDiv);
  }
}

customElements.define('my-hero', Hero);
