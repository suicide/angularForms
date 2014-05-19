/**
 * Created by psy on 11.05.14.
 */
var formApp = angular.module('formApp', []);

formApp.controller('FormController', ['$scope', '$http', function ($scope, $http) {
  $scope.submitted = false;

  $scope.send = function() {

    var data = {
      title: $scope.title,
      message: $scope.message
    };

    $http.post('/formAction', data).success(function() {
      $scope.result = 'SUCCESS!';
      $scope.submitted = true;
    })
  }
}]);