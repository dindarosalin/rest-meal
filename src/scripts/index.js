import 'regenerator-runtime';
import '../styles/main.css';

import './views/components/navbar';
import './views/components/footer';
import './views/components/hero';

import App from './views/app';
import swRegister from '../scripts/utils/sw-register';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  // Register the Service Worker after the app has been created.
  swRegister();
});
