import CONFIG from '../../globals/config';

const createRestaurantItemTemplate = (restaurant) => `
<div class="restaurant-list">
<article tabindex="0" class="card">
<div class="card-img-container">
    <img class="card-image" alt="${restaurant.name}" src="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}"/>
</div>
<div class="card-content">
    <div class="card-header">
    <p class="card-content-title">${restaurant.name}</p>
    <span class="card-rating">
        <i title="ratings" class="fas fa-star icon-primary"></i>
        <span class="rating">${restaurant.rating}</span>
    </span>
    </div>
    <p class="card-content-city">${restaurant.city} </p>
    <p class="card-content-description">${restaurant.description}</p>
    <a href="${`/#/detail/${restaurant.id}`}" class="card-detail">Detail Resto</a>
</div>
</div>
`;

const createSkeletonRestaurantTemplate = (count) => {
  let skeleton = '';

  for (let i = 0; i < count; i += 1) {
    skeleton += `
          <article tabindex="0" class="card">
          <div class="card-img-container">
              <img class="card-image" alt="skeleton" src="./images/placeholder-medium.jpg" width="100%" height="250px"/>
          </div>

          <div class="card-content">
              <p class="skeleton">Lorem ipsum dolor sit.</p>
              <p class="skeleton">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</p>
          </div>
      </article>
    `;
  }
  return skeleton;
};
const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail">
  <div tabindex="0" class="container-info">
    <div class="img-container">
      <picture>
        <source
          class="detail-img lazyload"
          srcset="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}"
          type="image/webp"
          media="all and (max-width: 300px)"
        />
        <source
          class="detail-img lazyload"
          srcset="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}"
          type="image/jpeg"
          media="all and (max-width: 300px)"
        />
        <source
          class="detail-img lazyload"
          srcset="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}"
          type="image/webp"
          media="all and (min-width: 301px)"
        />
        <source
          class="detail-img lazyload"
          srcset="${CONFIG.BASE_IMAGE_SMALL_URL + restaurant.pictureId}"
          type="image/jpeg"
          media="all and (min-width: 301px)"
        />
        <source
          class="detail-img lazyload"
          srcset="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}"
          type="image/webp"
          media="all and (min-width: 700px) and (max-width: 900px)"
        />
        <source
          class="detail-img lazyload"
          srcset="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}"
          type="image/jpeg"
          media="all and (min-width: 700px) and (max-width: 900px)"
        />
        <source
          class="detail-img lazyload"
          srcset="${CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId}"
          type="image/webp"
          media="all and (min-width: 901px)"
        />
        <source
          class="detail-img lazyload"
          srcset="${CONFIG.BASE_IMAGE_LARGE_URL + restaurant.pictureId}"
          type="image/jpeg"
          media="all and (min-width: 901px)"
        />
        <img class="detail-img lazyload" data-src="${CONFIG.BASE_IMAGE_MEDIUM_URL + restaurant.pictureId}" alt="${restaurant.name}" />
      </picture>
    </div>

    <ul class="detail-info">
      <li class="resto-name">
        <p class="detail-name-address-rating-description" id="name">${restaurant.name}</p>
      </li>

      <li class="resto-address">
        <p class="detail-name-address-rating-description" id="address">${restaurant.address}, ${restaurant.city}</p>
        </li>

      <li class="resto-rating">
        <i title="ratings" class="fas fa-star icon-primary"></i>
        <p class="detail-name-address-rating-description" id="rating">${restaurant.rating}</p>
      </li>

      <li class="resto-description">
        <p class="detail-name-address-rating-description">${restaurant.description}</p>
      </li>
    </ul>
  </div>

    <div tabindex="0" class="detail-menu">
      <div class="detail-food">
        <h4>Food</h4>
        <table>
          <tr>
            <th>Food Item</th>
          </tr>
          ${restaurant.menus.foods
    .map(
      (food) => `
                <tr>
                  <td>${food.name}</td>
                </tr>
              `,
    )
    .join('')}
        </table>
      </div>

      <div class="detail-drink">
        <h4>Drink</h4>
        <table>
          <tr>
            <th>Drink Item</th>
          </tr>
          ${restaurant.menus.drinks
    .map(
      (drink) => `
                <tr>
                  <td>${drink.name}</td>
                </tr>
              `,
    )
    .join('')}
        </table>
      </div>
    </div>
  <div class="container-review">
      <h3 tabindex="0" class="title-review">Reviews</h3>
      <div tabindex="0" class="detail-review">
        <table>
          <tr>
            <th>User</th>
            <th>Date</th>
            <th>Review</th>
          </tr>
          ${restaurant.customerReviews
    .map(
      (review) => `
                <tr>
                  <td>${review.name}</td>
                  <td>${review.date}</td>
                  <td>${review.review}</td>
                </tr>
              `,
    )
    .join('')}
        </table>
      </div>
    </div>
</div>

`;

const createLikeRestaurantButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
<i class="fa fa-heart-o"></i>
</button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
<button aria-label="unlike this restaurant" id="likeButton" class="like">
<i class="fa fa-heart"></i>
</button>
`;

export {
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createSkeletonRestaurantTemplate,
};
