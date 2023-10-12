class Navbar extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <link rel="stylesheet" href="../styles/navbar.css">
      <div class="navbar">Navbar</div>
    `;
  }
}

customElements.define('my-navbar', Navbar);
