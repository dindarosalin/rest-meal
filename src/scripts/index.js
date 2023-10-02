//Entry Point

import 'regenerator-runtime'; /* for async await transpile */
import createNavbar from './components/navbar';
import '../styles/navbar.css';
import '../styles/main.css';


// Mendapatkan elemen root di mana navbar akan ditambahkan
const root = document.getElementById('root');

// Membuat navbar dan menambahkannya ke elemen root
const navbar = createNavbar();
root.appendChild(navbar);
