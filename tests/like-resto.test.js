/* eslint-disable no-undef */
import FavoriteRestoDB from '../src/public/data/favorite-resto-db';
import * as TestFactory from './helper/test-factory';

describe('Liking A resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<button id="likeButton"></button>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
    global.structuredClone = jest.fn((val) => JSON.parse(JSON.stringify(val)));
  });

  it('should show the like button when the resto has not been liked before', async () => {
    await TestFactory.createLikeButtonInitWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="like this resto"]')).toBeTruthy();
  });

  it('should not show the unlike button when the resto has not been liked before', async () => {
    await TestFactory.createLikeButtonInitWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this resto"]')).toBeFalsy();
  });

  it('should be able to like the resto', async () => {
    await TestFactory.createLikeButtonInitWithResto({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Memastikan film berhasil disukai
    const restaurant = await FavoriteRestoDB.getRestaurant(1);
    expect(restaurant).toEqual({ id: 1 });

    await FavoriteRestoDB.deleteRestaurant(1);
  });

  it('should not add a resto again when its already liked', async () => {
    await TestFactory.createLikeButtonInitWithResto({ id: 1 });

    // Tambahkan film dengan ID 1 ke daftar film yang disukai
    await FavoriteRestoDB.putRestaurant({ id: 1 });

    // Simulasikan pengguna menekan tombol suka film
    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    // Tidak ada film yang ganda
    expect(await FavoriteRestoDB.getAllRestaurant()).toEqual([{ id: 1 }]);

    await FavoriteRestoDB.deleteRestaurant(1);
  });

  it('should not add a resto when it has no id', async () => {
    await TestFactory.createLikeButtonInitWithResto({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoDB.getAllRestaurant()).toEqual([]);
  });
});
