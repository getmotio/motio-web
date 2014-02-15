!function () {
  "use strict";
  
  var adjustIllustrations = function () {
    var explanations = $('.explanations');
    var illustrationContainer, explanationContainer, explanationContainerHeight;
    $.each(explanations, function (i, val) {
      val = $(val);
      illustrationContainer = val.find('.illustration-container');
      explanationContainer = val.find('.explanation-container');
      explanationContainerHeight = explanationContainer.height();
      illustrationContainer.height(explanationContainerHeight * 0.94);
      illustrationContainer.css('margin-top', explanationContainerHeight * 0.03);
    });
  };

  $(function () {
    adjustIllustrations();
  });
}();
