class Footer extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      this.shadowRoot.innerHTML = `
        <link rel="stylesheet" href="../styles/footer.css">
        <div class="footer">footer</div>
      `;
    }
  }
  
  customElements.define('my-footer', Footer);
  