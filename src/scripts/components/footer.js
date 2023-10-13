class Footer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../styles/footer.css">
        <footer tabindex="0">
        <ul>
          <li>Copyright © 2023</li>
          <li>Rest Meal @dindarosalin</li>
        </ul>
      </footer>
      `;
    }
  }
  
  customElements.define('my-footer', Footer);
  