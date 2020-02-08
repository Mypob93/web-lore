var app = angular.module('myApp.portfolioCardsController', []);

app.controller('portfolioCardsController', function ($scope, $http) {   

    $scope.Trabajo1 = {
        Image: "/Content/Images/sq_img_12.jpg",
        Section: "web"
    };

    $scope.Trabajo2 = {
        Image: "/Content/Images/sq_img_2.jpg",
        Section: "design"
    };

    $scope.Trabajo3 = {
        Image: "/Content/Images/sq_img_5.jpg",
        Section: "brand"
    };

    $scope.Trabajo4 = {
        Image: "/Content/Images/sq_img_1.jpg",
        Section: "web"
    };

    $scope.Trabajo5 = {
        Image: "/Content/Images/sq_img_4.jpg",
        Section: "design"
    };

    $scope.Trabajo6 = {
        Image: "/Content/Images/sq_img_9.jpg",
        Section: "brand"
    };

    $scope.Trabajos = [];

    $scope.Trabajos.push($scope.Trabajo1);
    $scope.Trabajos.push($scope.Trabajo2);
    $scope.Trabajos.push($scope.Trabajo3);
    $scope.Trabajos.push($scope.Trabajo4);
    $scope.Trabajos.push($scope.Trabajo5);
    $scope.Trabajos.push($scope.Trabajo6);

    $scope.Trabajos.push($scope.Trabajo1);
    $scope.Trabajos.push($scope.Trabajo2);
    $scope.Trabajos.push($scope.Trabajo3);
    $scope.Trabajos.push($scope.Trabajo4);
    $scope.Trabajos.push($scope.Trabajo5);
    $scope.Trabajos.push($scope.Trabajo6);


    $scope.Trabajos.push($scope.Trabajo1);
    $scope.Trabajos.push($scope.Trabajo2);
    $scope.Trabajos.push($scope.Trabajo3);
    $scope.Trabajos.push($scope.Trabajo4);
    $scope.Trabajos.push($scope.Trabajo5);
    $scope.Trabajos.push($scope.Trabajo6);

    $scope.Trabajos.push($scope.Trabajo1);
    $scope.Trabajos.push($scope.Trabajo2);
    $scope.Trabajos.push($scope.Trabajo3);
    $scope.Trabajos.push($scope.Trabajo4);
    $scope.Trabajos.push($scope.Trabajo5);
    $scope.Trabajos.push($scope.Trabajo6);
});