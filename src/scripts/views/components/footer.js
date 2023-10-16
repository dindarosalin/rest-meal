/* eslint-disable linebreak-style */
class Footer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
  }

  render(){
    this.shadowRoot.innerHTML = `
    <link rel="stylesheet" href="../styles/footer.css">
    <footer tabindex="0">
    <ul>
      <li>Copyright © 2023 | </li>
      <li> Rest Meal @dindarosalin | </li>
      <li>
      <a href="https://github.com/dindarosalin" target="_blank">
        <img src="../public/images/logos/icons8-github-30.png" alt="GitHub">
        </a>
      </li>
      <li>
      <a href="https://linkedin/in/dindarosalin" target="_blank">
        <img src="../public/images/logos/icons8-linkedin-30.png" alt="LinkedIn">
        </a>
      </li>
      <li>
      <a href="https://instagram.com/dindarosalin" target="_blank">
        <img src="../public/images/logos/icons8-instagram-50.png" alt="Instagram">
        </a>
      </li>
      <li>dindarosalin</li>
      </ul>
    </footer>
  `;
  }
}

customElements.define('my-footer', Footer);
