/* eslint-disable no-undef */
const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/#/like');
});

Scenario('showing empty liked Restaurants', ({ I }) => {
  I.seeElement('#query');

  // I.seeElement('.query'); --> menyebabkan error

  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');
});

Scenario('liking one resto', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');

  // pause();

  I.seeElement('.resto__name a');
  const firstResto = locate('.resto__name a').first();
  const firstRestoName = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/like');
  I.seeElement('.resto-item');
  const LikedRestoName = await I.grabTextFrom('.resto__name');

  assert.strictEqual(firstRestoName, LikedRestoName);
});

Scenario('searching restaurants', async ({ I }) => {
  I.see('Tidak ada resto untuk ditampilkan', '.resto-item__not__found');

  I.amOnPage('/');

  I.seeElement('.resto__name a');

  const titles = [];

  // eslint-disable-next-line no-plusplus
  for (let i = 1; i <= 3; i++) {
    I.click(locate('.resto__name a').at(i));

    I.seeElement('#likeButton');
    I.click('#likeButton');

    // eslint-disable-next-line no-await-in-loop
    titles.push(await I.grabTextFrom('.resto__name'));

    I.amOnPage('/');
  }

  I.amOnPage('/#/like');
  I.seeElement('#query');

  const visibleLikedResto = await I.grabNumberOfVisibleElements('.resto-item');
  assert.strictEqual(titles.length, visibleLikedResto);

  const searchQuery = titles[1].substring(1, 3);

  I.fillField('#query', searchQuery);
  I.pressKey('Enter');

  // mendapatkan daftar resto yang sesuai dengan searchQuery
  const matchingResto = titles.filter((title) => title.indexOf(searchQuery) !== -1);
  const visibleSearchedLikedResto = await I.grabNumberOfVisibleElements('.resto-item');

  assert.strictEqual(matchingResto.length, visibleSearchedLikedResto);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < matchingResto.length; i++) {
    // eslint-disable-next-line no-await-in-loop
    const visibleName = await I.grabTextFrom(locate('.resto__name').at(i + 1));

    assert.strictEqual(matchingResto[i], visibleName);
  }
});
