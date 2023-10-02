export default function createNavbar() {
  const navbar = document.createElement("nav");
  navbar.classList.add("navbar");

  const logo = document.createElement("a");
  logo.href = "#";
  logo.textContent = "Logo";
  logo.classList.add("navbar__logo");

  const menu = document.createElement("ul");
  menu.classList.add("navbar__menu");

  const homeLink = createNavLink("Home");
  const aboutLink = createNavLink("About");
  const contactLink = createNavLink("Contact");

  menu.appendChild(homeLink);
  menu.appendChild(aboutLink);
  menu.appendChild(contactLink);

  navbar.appendChild(logo);
  navbar.appendChild(menu);

  return navbar;
}

function createNavLink(text) {
  const link = document.createElement("li");
  link.textContent = text;
  link.classList.add("navbar__menu-item");
  return link;
}