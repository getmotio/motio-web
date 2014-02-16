!function () {
  "use strict";

  $(function () {
    i18n.init({lng: 'es-AR'}, function (t) {
      $('.explanations').i18n();
    });
  });

}();
