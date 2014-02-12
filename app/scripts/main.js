var adjustSlides = function () {
  var windowHeight = $(window).outerHeight();
  var headerHeight = $('.navbar-motio').outerHeight();
  var newHeight = windowHeight - headerHeight;
  var wrappers = $('.slide-wrapper');
  wrappers.height(newHeight);
  wrappers.children('.slide-image').height(newHeight);
  wrappers.children('.slide-content').height(newHeight);
}

$(function () {
  adjustSlides();
  var s = skrollr.init({smoothScrolling: false});

});