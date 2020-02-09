var app = angular.module('myApp.portfolioController', []);

app.controller('portfolioController', function ($scope, $http) {
    $scope.Trabajos = [];

    $scope.Trabajo1 = {
        Image: "/Content/Images/feed1.png",
        ImageAlt: "Descripcion genérica",
        KeyDescripcion: getTranslationByKey("descripcioncliente"),
        Link: "#"
    };

    $scope.Trabajo2 = {
        Image: "/Content/Images/feed2.png",
        ImageAlt: "Descripcion genérica",
        KeyDescripcion: getTranslationByKey("descripcioncliente"),
        Link: "#"
    };

    $scope.Trabajo3 = {
        Image: "/Content/Images/feed3.png",
        ImageAlt: "Descripcion genérica",
        KeyDescripcion: getTranslationByKey("descripcioncliente"),
        Link: "#"
    };

    $scope.Trabajos.push($scope.Trabajo1);
    $scope.Trabajos.push($scope.Trabajo2);
    $scope.Trabajos.push($scope.Trabajo3);
});