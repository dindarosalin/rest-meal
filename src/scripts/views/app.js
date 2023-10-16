/* eslint-disable no-underscore-dangle */
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import ContentInitiator from './components/content-initiator';

class App {
  constructor({
    button,
    maincontent,
    drawer,
    hero,
  }) {
    this._button = button;
    this._content = maincontent;
    this._drawer = drawer;
    this._hero = hero;

    this._initialAppShell();
  }

  _initialAppShell() {
    ContentInitiator.init({
      button: this._button,
      content: this._content,
      drawer: this._drawer,
      hero: this._hero,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
  }
}

export default App;