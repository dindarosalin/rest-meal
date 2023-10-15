/* eslint-disable linebreak-style */
class RestaurantList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.render();
  }

  async render() {
    const response = await fetch('../../public/data/DATA.json');
    const data = await response.json();

    const restaurantList = document.createElement('ul');
    restaurantList.classList.add('restaurant-list');

    data.restaurants.forEach((restaurant) => {
      const restaurantItem = document.createElement('li');
      restaurantItem.classList.add('restaurant-item');

      restaurantItem.innerHTML = `
            <link rel="stylesheet" href="../styles/restaurant-list.css">
            <article tabindex="0" class="card">
            <div class="card-img-container">
                <img class="card-image" alt="${restaurant.name}" src="${restaurant.pictureId}"/>
            </div>
            <div class="card-content">
                <div class="card-header">
                <p class="card-content-title">${restaurant.name}</p>
                <span class="card-rating">
                    <img src="../public/images/logos/icons8-star-48.png" alt="card-rating" class="star-icon">
                    <span class="rating">${restaurant.rating}</span>
                </span>
                </div>
                <p class="card-content-city">${restaurant.city} </p>
                <p class="card-content-description">${restaurant.description}</p>
                <a href="#" class="card-location">Cek Lokasi</a>
            </div>
            `;

      restaurantList.appendChild(restaurantItem);
    });

    this.shadowRoot.appendChild(restaurantList);
  }
}

customElements.define('my-restaurant-list', RestaurantList);
