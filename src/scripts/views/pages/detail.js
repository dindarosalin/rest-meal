import UrlParser from '../../routes/url-parser';
import RestoSources from '../../../public/data/resto-sources';
import {
  createRestaurantDetailTemplate,
} from '../templates/template-creator';
import LikeButtonInit from '../../utils/like-button-iniator';
import PostReview from '../../utils/postreview-initiator';
import FavoriteRestoDB from '../../../public/data/favorite-resto-db';

const Detail = {
  async render() {
    return `
    <div class="main">
        <section id="detail-rest"></section>
        <div class="like" id="likeButtonContainer"></div>
        <div class="form-review">
        <h4>Berikan Review</h4>
          <form>
            <div class="mb-3">
              <label for="inputName" class="form-label">Name</label>
              <input name="inputName" type="text" class="form-control" id="inputName" required>
            </div>
            <div class="mb-3">
              <label for="inputReview" class="form-label">Review</label>
              <textarea name="inputReview" class="form-control" id="inputReview" required></textarea>
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
    LikeButtonInit.init({
      likeButtonContainer: document.getElementById('likeButtonContainer'),
      favoriteRestaurants: FavoriteRestoDB,
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
      document.querySelector('#mainContent').focus();
    });
  },

};

export default Detail;
