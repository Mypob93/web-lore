var app = angular.module('myApp.contactController', []);

app.controller('contactController',["$scope", "$http", function ($scope, $http) {
    $scope.Name = "";
    $scope.Email = "";
    $scope.Subject = "";
    $scope.Message = "";

    $scope.namePlaceholder = getTranslationByKey("nombre");
    $scope.emailPlaceholder = getTranslationByKey("email");
    $scope.temaPlaceholder = getTranslationByKey("tema");
    $scope.mensajePlaceholder = getTranslationByKey("mensaje");

    $scope.canSendMail = true;

    $scope.sendMail = function () {
        if ($scope.contactIsValid()) {
            addLoader();
            let obj = {
                viewModel: $scope.scopeToViewModel(),
                __RequestVerificationToken: $scope.getToken()
            };

            $.ajax({
                url: urls.contactMeUrl,
                type: 'POST',
                data: obj,
                success: function (result) {
                    $('#contactForm')[0].reset();
                    removeLoader();
                },
                error: error => removeLoader()
            });
        }
    }

    $scope.getToken = function () {
        return $('input[name="__RequestVerificationToken"]').val();
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
}]);

var controladorContacto;