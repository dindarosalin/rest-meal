// index.js
import 'regenerator-runtime';
import '../styles/main.css';

import './views/components/navbar';
import './views/components/footer';
import './views/components/hero';

import App from './views/app';

const app = new App({
  button: document.querySelector('#menu'),
  content: document.querySelector('main'),
  drawer: document.querySelector('#drawer'),
  hero: document.querySelector('.hero'),
});

window.addEventListener('hashchange', () => {
  app.renderPage(url);
});

window.addEventListener('load', () => {
  app.renderPage();
});