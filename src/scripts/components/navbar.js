class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <link rel="stylesheet" href="../styles/navbar.css">
      <nav>
        <div class="menu-hp">
          <div>
            <a href="/" class="logo-font"> Resto </a>
          </div>

          <div class="menu-container">
            <button
              class="menu"
              aria-label="button menu dropdown on mobile"
              type="button"
            >
              <span class="fa fa-bars"></span>
            </button>
          </div>
        </div>

        <ul class="nav-list">
          <li class="nav-item"><a href="/">Home</a></li>
          <li class="nav-item"><a href="#/favorite">Favorite</a></li>
          <li class="nav-item">
            <a href="https://www.linkedin.com/in/dindarosalin/"target="_blank">Contact</a>
          </li>
        </ul>
      </nav>
    `;
  }
}

customElements.define('my-navbar', Navbar);