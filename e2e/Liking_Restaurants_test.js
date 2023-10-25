/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/favorite');
});

Scenario('showing empty liked Restaurants', ({ I }) => {
  I.seeElement('#query');

  // I.seeElement('.query'); --> menyebabkan error

  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.restaurant-item__not__found');

  I.amOnPage('/');

  // pause();

  I.seeElement('.restaurant__name a');
  const firstResto = locate('.restaurant__name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.restaurant-item');
  const LikedRestoName = await I.grabTextFrom('.restaurant__name');

  assert.strictEqual(firstRestoName, LikedRestoName);
});
