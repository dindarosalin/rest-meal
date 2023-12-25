/* eslint-disable linebreak-style */
class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
    this.lazyLoadBackground();
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

    this.appendChild(heroDiv);
  }

  lazyLoadBackground() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Appear when 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const heroDiv = entry.target;
          heroDiv.style.backgroundImage = 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url("../public/images/heros/hero-image_2.jpg")';
          heroDiv.style.backgroundPosition = 'center';
          heroDiv.style.backgroundSize = 'cover';
          heroDiv.style.zIndex = '-1';
          observer.unobserve(heroDiv);
        }
      });
    }, options);

    observer.observe(this);
  }
}

customElements.define('my-hero', Hero);
