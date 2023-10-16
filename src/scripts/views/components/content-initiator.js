const ContentInitiator = {
  init({button, maincontent, drawer, hero,}) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    hero.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    maincontent.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });
  },

  _toggleDrawer(event, drawer) {
    drawer.classList.toggle('open');
    event.stopPropagation();
  },

  _closeDrawer(event, drawer) {
    drawer.classList.remove('open');
    event.stopPropagation();
  },
};

export default ContentInitiator;
