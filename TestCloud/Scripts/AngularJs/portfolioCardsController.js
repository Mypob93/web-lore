var app = angular.module('myApp.portfolioCardsController', []);

app.controller('portfolioCardsController', ["$scope", "$http", function ($scope, $http) {   

    $scope.Trabajo1 = {
        Image: "/Content/Images/portfolio/1.jpg",
        Section: "Graphics"
    };

    $scope.Trabajo2 = {
        Image: "/Content/Images/portfolio/2.jpg",
        Section: "Graphics"
    };

    $scope.Trabajo3 = {
        Image: "/Content/Images/portfolio/3.jpg",
        Section: "Graphics"
    };

    $scope.Trabajo4 = {
        Image: "/Content/Images/portfolio/4.jpg",
        Section: "Graphics"
    };

    $scope.Trabajo5 = {
        Image: "/Content/Images/portfolio/5.jpg",
        Section: "Graphics"
    };

    $scope.Trabajo6 = {
        Image: "/Content/Images/portfolio/6.jpg",
        Section: "Graphics"
    };

    $scope.Trabajo7 = {
        Image: "/Content/Images/portfolio/7.jpg",
        Section: "Graphics"
    };

    $scope.Trabajo8 = {
        Image: "/Content/Images/portfolio/8.jpg",
        Section: "Graphics"
    };

    $scope.Trabajo9 = {
        Image: "/Content/Images/portfolio/9.jpg",
        Section: "Photos"
    };

    $scope.Trabajo10 = {
        Image: "/Content/Images/portfolio/10.jpg",
        Section: "Photos"
    };

    $scope.Trabajo11 = {
        Image: "/Content/Images/portfolio/11.jpg",
        Section: "Photos"
    };

    $scope.Trabajo12 = {
        Image: "/Content/Images/portfolio/12.jpg",
        Section: "Photos"
    };

    $scope.Trabajo13 = {
        Image: "/Content/Images/portfolio/13.jpg",
        Section: "Graphics"
    };

    $scope.Trabajo14 = {
        Image: "/Content/Images/portfolio/14.jpg",
        Section: "Graphics"
    };

    $scope.Trabajo15 = {
        Image: "/Content/Images/portfolio/15.jpg",
        Section: "Graphics"
    };

    $scope.Trabajo16 = {
        Image: "/Content/Images/portfolio/16.jpg",
        Section: "Graphics"
    };

    $scope.Trabajo17 = {
        Image: "/Content/Images/portfolio/17.jpg",
        Section: "Graphics"
    };

    $scope.Trabajo18 = {
        Image: "/Content/Images/portfolio/18.jpg",
        Section: "Thumbnails"
    };

    $scope.Trabajo19 = {
        Image: "/Content/Images/portfolio/19.jpg",
        Section: "Thumbnails"
    };

    $scope.Trabajo20 = {
        Image: "/Content/Images/portfolio/20.jpg",
        Section: "Thumbnails"
    };

    $scope.Trabajo21 = {
        Image: "/Content/Images/portfolio/21.jpg",
        Section: "Thumbnails"
    };
   

    $scope.Trabajos = [];

    $scope.Trabajos.push($scope.Trabajo1);
    $scope.Trabajos.push($scope.Trabajo2);
    $scope.Trabajos.push($scope.Trabajo3);
    $scope.Trabajos.push($scope.Trabajo4);
    $scope.Trabajos.push($scope.Trabajo5);
    $scope.Trabajos.push($scope.Trabajo6);
    $scope.Trabajos.push($scope.Trabajo7);
    $scope.Trabajos.push($scope.Trabajo8);
    $scope.Trabajos.push($scope.Trabajo9);
    $scope.Trabajos.push($scope.Trabajo10);
    $scope.Trabajos.push($scope.Trabajo11);
    $scope.Trabajos.push($scope.Trabajo12);
    $scope.Trabajos.push($scope.Trabajo13);
    $scope.Trabajos.push($scope.Trabajo14);
    $scope.Trabajos.push($scope.Trabajo15);
    $scope.Trabajos.push($scope.Trabajo16);
    $scope.Trabajos.push($scope.Trabajo17);
    $scope.Trabajos.push($scope.Trabajo18);
    $scope.Trabajos.push($scope.Trabajo19);
    $scope.Trabajos.push($scope.Trabajo20);
    $scope.Trabajos.push($scope.Trabajo21);
}]);