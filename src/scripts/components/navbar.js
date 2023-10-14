class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="../styles/navbar.css">
    <header class="header">
    <a href="/">
        <h1 class="nav_logo">IC Resto</h1>
    </a>
    <button class="menu" id="menu" aria-label="button menu dropdown on mobile">☰</button>
    <nav id="drawer" class="nav">
        <ul class="nav_list">
            <li class="nav_item"><a href="index.html">Home</a></li>
            <li class="nav_item"><a href="#">Favorite</a></li>
            <li class="nav_item"><a href="https://github.com/ibnucholdun" target="_blank" rel="noopener">About
                    Us</a></li>
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
}

customElements.define('my-navbar', Navbar);
