class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="../styles/navbar.css">
    <header class="header">
      <a href="/">
          <img src="../public/images/logos/icons8-restauran-64.png" class="nav_logo" alt="logo apk">
      </a>
      
      <nav id="drawer" class="nav">
      <button class="menu" id="menu" aria-label="button menu dropdown on mobile">☰</button>
          <ul class="nav_list">
              <li class="nav_item"><a href="#">Home</a></li>
              <li class="nav_item"><a href="#">Favorite</a></li>
              <li class="nav_item"><a href="https://github.com/dindarosalin" target="_blank">About Us</a></li>
          </ul>
      </nav>
    </header>
    `;

    const menu = this.shadowRoot.querySelector('#menu');
    const hero = this.shadowRoot.querySelector('.hero');
    const main = this.shadowRoot.querySelector('main');
    const drawer = this.shadowRoot.querySelector('#drawer');
    menu.addEventListener('click', function (event) {
      drawer.classList.toggle('open');
      event.stopPropagation();
    });
    main.addEventListener('click', function () {
      drawer.classList.remove('open');
    });
  }

  handleScroll() {
    const navbar = this.shadowRoot.querySelector('.header');
    if (window.scrollY > 0) {
      navbar.classList.add('navbar-fixed');
    } else {
      navbar.classList.remove('navbar-fixed');
    }
  }
}

customElements.define('my-navbar', Navbar);
