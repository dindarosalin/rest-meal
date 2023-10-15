// index.js
import 'regenerator-runtime';
import '../styles/main.css';
import App from './views/app';

const app = new App();

window.addEventListener('hashchange', () => {
  app.renderPage();
});

document.addEventListener('DOMContentLoaded', async () => {
  app.renderPage();
});
