!function () {
  "use strict";

  $(function () {
    i18n.init(function (t) {
      $('.explanations').i18n();
    });
  });

}();

var Motio = angular.module('Motio', ['ngResource']);
