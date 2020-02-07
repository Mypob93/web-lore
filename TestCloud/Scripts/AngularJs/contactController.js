var app = angular.module('myApp.contactController', []);

app.controller('contactController', function ($scope, $http) {
    $scope.Name = "";
    $scope.Email = "";
    $scope.Subject = "";
    $scope.Message = "";

    $scope.canSendMail = true;

    $scope.sendMail = function () {
        if ($scope.contactIsValid()) {
            addLoader();
            $http.post("/Home/ContactMe", $scope.scopeToViewModel())
                .then(function (response) {
                    $('#contactForm')[0].reset();
                    removeLoader();
                }, function (error)
                    {
                        console.log(error);
                        removeLoader();
                    });
        }
    }

    $scope.scopeToViewModel = function () {
        return {
            Name: angular.copy($scope.Name),
            Email: angular.copy($scope.Email),
            Subject: angular.copy($scope.Subject),
            Message: angular.copy($scope.Message)
        }
    }

    $scope.contactIsValid = function () {
        return $("#contactForm")[0].reportValidity();
    }

    controladorContacto = $scope;
});

var controladorContacto;