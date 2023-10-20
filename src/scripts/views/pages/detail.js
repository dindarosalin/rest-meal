import UrlParser from '../../routes/url-parser';
import RestoSources from '../../../public/data/resto-sources';
import {
  createRestaurantDetailTemplate,
} from '../templates/template-creator';
import LikeButtonPres from '../../utils/like-button-presenter';
import PostReview from '../../utils/postreview-initiator.js';
import FavoriteRestoDB from '../../../public/data/favorite-resto-db';

const Detail = {
  async render() {
    return `
    <div class="main">
      <h2 tabindex="0" class="explore-restaurant__label">Detail Restuarant</h2>
        <section id="detail-rest"></section>
        <div class="like" id="likeButtonContainer"></div>
        <div class="form-review">
          <form>
            <div class="mb-3">
              <label for="inputName" class="form-label">Name</label>
              <input name="inputName" type="text" class="form-control" id="inputName">
            </div>
            <div class="mb-3">
              <label for="inputReview" class="form-label">Review</label>
              <input name="inputReview" type="text" class="form-control" id="inputReview">
            </div>
            <button id="submit-review" type="submit" class="btn">Submit</button>
          </form>
        </div>
      </div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestoSources.detailRestaurant(url.id);
    const restaurantContainer = document.getElementById('detail-rest');
    restaurantContainer.innerHTML = createRestaurantDetailTemplate(restaurant);

    // favorite
    LikeButtonPres
  .init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      FavoriteRestoDB: FavoriteRestoDB,
      restaurant: {
        id: restaurant.id,
        name: restaurant.name,
        city: restaurant.city,
        pictureId: restaurant.pictureId,
        description: restaurant.description,
        rating: restaurant.rating,
      },
    });

    // post review
    const submitReview = document.getElementById('submit-review');
    submitReview.addEventListener('click', (event) => {
      event.preventDefault();
      PostReview();
    });

    const skipLinkElem = document.querySelector('.skip-link');
    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#main-content').focus();
    });
  },

};

export default Detail;