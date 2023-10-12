// restaurant-list.js
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

        data.restaurants.forEach(restaurant => {
            const restaurantItem = document.createElement('li');
            restaurantItem.classList.add('restaurant-item');

            restaurantItem.innerHTML = `
            <link rel="stylesheet" href="../styles/restaurant-list.css">
            <div class="retaurant-list">
                <h2>${restaurant.name}</h2>
                <p>${restaurant.description}</p>
                <img src="${restaurant.pictureId}" alt="${restaurant.name}">
                <p>City: ${restaurant.city}</p>
                <p>Rating: ${restaurant.rating}</p>
            </div>
            `;

            restaurantList.appendChild(restaurantItem);
        });

        this.shadowRoot.appendChild(restaurantList);
    }
}

customElements.define('restaurant-list', RestaurantList);
