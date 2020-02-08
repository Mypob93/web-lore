var app = angular.module('myApp.headerController', []);

app.controller('headerController', function ($scope, $http) {

    $scope.lenguajeSeleccionado = "";

    $scope.onChangeLang = function () {
        console.log('lang');
    }
});