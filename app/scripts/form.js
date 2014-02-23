Motio.controller('FormController', ['$scope', '$resource', function ($scope, $resource) {

  var Contact = $resource('/contact');

  $scope.contact = {};
  $scope.sent = false;

  $scope.send = function () {
    new Contact($scope.contact).$save(function () {
      $scope.contact = {};
      $scope.contactForm.$setPristine();
      $scope.sent = true;
      _.delay(function () {
        $scope.$apply(function () {
          $scope.sent = false;
        });
      }, 2000);
    });
  };

}]);
