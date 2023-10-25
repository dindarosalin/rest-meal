/* eslint-disable no-undef */
/* eslint-disable import/prefer-default-export */
import LikeButtonInit from '../../src/scripts/utils/like-button-iniator';

const createLikeButtonInitWithResto = async (restaurant) => {
  await LikeButtonInit.init({
    likeButtonContainer: document.querySelector('#likeButton'),
    restaurant,
  });
  global.structuredClone = jest.fn((val) => JSON.parse(JSON.stringify(val)));
};

export { createLikeButtonInitWithResto };
