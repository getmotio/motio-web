Motio.controller('FormController', ['$scope', '$resource', function ($scope, $resource) {

  var Contact = $resource('/contact');

  $scope.contact = {};

  $scope.send = function () {
    new Contact($scope.contact).$save();

  };

}]);
