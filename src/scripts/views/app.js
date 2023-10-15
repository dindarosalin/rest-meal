/* eslint-disable no-underscore-dangle */
/* eslint-disable class-methods-use-this */
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import Navbar from './components/navbar';
import Footer from './components/footer';

class App {
  constructor() {
    this._initialAppShell();
    this._navbar = Navbar;
    this._footer = Footer;
  }

  _initialAppShell() {
    const content = document.querySelector('#maincontent');
    const navbar = document.createElement('my-navbar');
    const hero = document.createElement('my-hero');
    const footer = document.createElement('my-footer');

    content.appendChild(navbar);
    content.appendChild(hero);
    content.appendChild(footer);

    this._content = content;
  }

  async render() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];

    // Perbaiki _content menjadi content
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;
