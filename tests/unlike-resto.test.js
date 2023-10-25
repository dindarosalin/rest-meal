/* eslint-disable no-undef */
import FavoriteRestoDB from '../src/public/data/favorite-resto-db';
import * as TestFactory from './helper/test-factory';

describe('Unliking A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<button id="likeButton"></button>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    global.structuredClone = jest.fn((val) => JSON.parse(JSON.stringify(val)));
    await FavoriteRestoDB.putRestaurant({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoDB.deleteRestaurant(1);
  });

  it('should display unlike widget when the movie has been liked', async () => {
    await TestFactory.createLikeButtonInitWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeTruthy();
  });

  it('should not display like widget when the resto has been liked', async () => {
    await TestFactory.createLikeButtonInitWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeFalsy();
  });

  it('should be able to remove liked resto from the list', async () => {
    await TestFactory.createLikeButtonInitWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoDB.getAllRestaurant()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked movie is not in the list', async () => {
    await TestFactory.createLikeButtonInitWithResto({ id: 1 });

    // Hapus dulu film dari daftar film yang disukai
    await FavoriteRestoDB.deleteRestaurant(1);

    // Kemudian, simulasikan pengguna menekan widget batal menyukai film
    document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoDB.getAllRestaurant()).toEqual([]);
  });
});
