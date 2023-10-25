/* eslint-disable linebreak-style */
class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="Navbar">
    <header class="header">
      <a href="/">
          <img src="../images/logos/icons8-restauran-64-light.png" class="nav_logo" alt="logo apk">
      </a>
      <nav id="navigationDrawer" class="nav">
      <button class="menu" id="hamburgerButton" aria-label="button menu dropdown on mobile">☰</button>
          <ul class="nav_list">
              <li class="nav_item"><a href="#/home">Home</a></li>
              <li class="nav_item"><a href="#/favorite">Favorite</a></li>
              <li class="nav_item"><a href="https://github.com/dindarosalin" target="_blank" rel="noreferrer">About Us</a></li>
          </ul>
      </nav>
    </header>
    `;
  }
}

customElements.define('my-navbar', Navbar);
