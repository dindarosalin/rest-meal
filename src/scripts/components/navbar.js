class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="../styles/navbar.css">
    <header class="header">
    <nav id="drawer" class="nav">
      <div class="nav__toggle">
        <div class="hamburger"></div>
      </div>
      <ul class="nav__list">
        <li class="nav__main">
          <a href="#">
            <img src="../public/images/heros/hero-image_2.jpg" alt="">
          </a>
        </li>
        <li class="nav__item"><a href="#">Home</a></li>
        <li class="nav__item"><a href="#">About</a></li>
        <li class="nav__item"><a href="#">Contact</a></li>
        <li class="nav__item"><a href="#">Services</a></li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('my-navbar', Navbar);
