const angular = require('angular');
require('./main.css');

const app = angular.module('myApp', []);

app.controller('fontController', function($scope) {
  $scope.colors = [
    {color: 'red'},
    {color: 'green'},
    {color: 'blue'}
  ];

  $scope.fonts = [
    {font: 'Tillana'},
    {font: 'Bungee Inline'},
    {font: 'Bitter'}
  ];

  $scope.myColor = $scope.colors[0];
  $scope.myFont = $scope.fonts[0];

  $scope.selectedColor = 'red';
  $scope.selectedFont = 'Tillana';

  $scope.changeColor = function(option) {
    $scope.selectedColor = option.color;
  };

  $scope.changeFont = function(option) {
    $scope.selectedFont = option.font;
  };

});