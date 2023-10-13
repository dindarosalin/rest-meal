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
            <article tabindex="0" class="card">
            <div class="card-img-container">
                <img class="card-image" alt="${restaurant.name}" src="${restaurant.pictureId}"/>
                <span class="card-rating">
                    <i title="ratings" class="fa fa-star"></i>
                    <span>${restaurant.rating}</span>
                </span>
            </div>

            <div class="card-content">
                <p class="card-content-title">${restaurant.name} - ${restaurant.city}</p>
                <p class="card-content-title-description">Description: </p>
                <p class="card-content-description">${restaurant.description}</p>
            </div>
        </article>
            `;

            restaurantList.appendChild(restaurantItem);
        });

        this.shadowRoot.appendChild(restaurantList);
    }
}

customElements.define('restaurant-list', RestaurantList);
