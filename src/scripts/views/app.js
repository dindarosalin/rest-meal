/* eslint-disable no-underscore-dangle */
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import NavInitiator from '../utils/nav-initiator';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    NavInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipToContent = document.querySelector('.skip-link');
    const mainContent = document.getElementById('mainContent');
    skipToContent.addEventListener('click', (e) => {
      e.preventDefault();
      mainContent.scrollIntoView({
        behavior: 'smooth',
      });
      skipToContent.blur();
    });
  }
}

export default App;
