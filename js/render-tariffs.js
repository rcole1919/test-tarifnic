'use strict';

(function () {
  let tariffsList = document.querySelector('.tariffs__list');
  let tariff = document.querySelector('#tariff')
    .content
    .querySelector('.tariff');

  let renderTariff = function (item) {
    let tariffItem = tariff.cloneNode(true);
    tariffItem.querySelector('.tariff__title').textContent = item.name;
    tariffItem.querySelector('.tariff__speed-value').textContent = item.speed;
    tariffItem.querySelector('.price__value').textContent = item.price;
    tariffItem.querySelector('.tariff__channels-count').textContent = item.channels_count;
    tariffItem.querySelector('.tariff__channels-hd').textContent = item.hd_channels_count;
    tariffItem.querySelector('.tariff__channel-end').textContent = window.util.chooseDeclination(item.channels_count, ['канал', 'канала', 'каналов']);

    return tariffItem;
  };

  let renderTariffList = function (data) {
    data.forEach(function (el) {
      tariffsList.appendChild(renderTariff(el));
    });
  };

  window.backend.load(renderTariffList);
})();
