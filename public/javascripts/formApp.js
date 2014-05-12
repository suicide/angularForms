/**
 * Created by psy on 11.05.14.
 */
var formApp = angular.module('formApp', []);

formApp.controller('FormController', function ($scope) {
  $scope.send = function() {
    $scope.myMessage = $scope.myMessage + '!!!'
  }
});