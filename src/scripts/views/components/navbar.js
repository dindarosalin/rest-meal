/* eslint-disable linebreak-style */
class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <link rel="stylesheet" href="../styles/navbar.css">
    <div class="Navbar_menu">
        <button aria-label="Hamburger Button" id="hamburgerButton">☰</button>
      </div>
      <div class="Navbar_brand">
      <a href="/">
      <img src="../public/images/logos/icons8-restauran-64.png" class="nav_logo" alt="logo apk"></a>
      </div>
      <nav id="navigationDrawer" class="Navbar_navigation">
      <ul>
        <li><a href="#/home">Home</a></li>
        <li><a href="#/favorite">Favorite</a></li>
        <li><a href="https://github.com/dindarosalin" target="_blank" rel="noreferrer">About Us</a></li>
      </ul>
    </nav>
    `;
  }
}

customElements.define('my-navbar', Navbar);