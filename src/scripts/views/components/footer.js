/* eslint-disable linebreak-style */
class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
    <ul>
      <li>Copyright © 2023 | </li>
      <li> Rest Meal @dindarosalin</li>
      <li>
      </ul>
    </footer>
  `;
  }
}

customElements.define('my-footer', Footer);
