'use strict';

(function () {
  const URL_LOAD = 'https://tarifnik.ru/rabota/api/data_controller';
  const URL_SAVE = 'https://tarifnik.ru/rabota/api/order_controller';

  window.backend = {
    load: function (onLoad) {
      let xhr = new XMLHttpRequest();
      xhr.responseType = 'json';

      xhr.addEventListener('load', function () {
        onLoad(xhr.response);
      });

      xhr.open('GET', URL_LOAD);
      xhr.send();
    },
    save: function (data) {
      let xhr = new XMLHttpRequest();

      xhr.addEventListener('load', function () {
        if (xhr.status === 200) {
          alert(xhr.response); // Выдает ошибку набора телефона
        }
      });

      xhr.open('POST', URL_SAVE);
      xhr.send(data);
    },
    saveThroughAjax: function (data) {
      $.ajax({
        url: URL_SAVE,
        type: 'POST',
        dataType: 'json',
        data: data,
        success: function(resp) {
          alert(resp.responseText); // Ничего не выдает. При невалидных формах выдает ошибку
        },
        error: function(resp) {
          alert(resp.responseText); // Выдает result: ok 
        }
      });
    }
  };
})();
