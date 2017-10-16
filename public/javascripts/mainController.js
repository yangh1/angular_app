var app = angular.module('myApp', []);

app.controller('mainController', function ($scope, $http) {
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.phone = "";
    $scope.email = "";

    $http.get('/contacts')
        .success(function (data) {
            if (data.succ)
                $scope.contacts = data.result;
            else
                alert(data.result);
            console.log($scope.contacts);
        })
        .error(function (data) {
            console.log('Error: ' + data);
        });

    $scope.addNewContact = function () {

        if ($scope.firstName.length == 0) {
            alert("Please enter first name!");
            return;
        }
        if ($scope.lastName.length == 0) {
            alert("Please enter last name!");
            return;
        }

        var newContact = {
            firstName: $scope.firstName,
            lastName: $scope.lastName,
            phone: $scope.phone,
            email: $scope.email
        }

        $http.post('/contacts', newContact)
            .success(function (data) {
                if (data.succ)
                    $scope.contacts.push(data.result);
                else
                    alert(data.result);
                $scope.firstName = "";
                $scope.lastName = "";
                $scope.phone = "";
                $scope.email = "";
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    }

    $scope.deleteContact = function (id, index) {

        $http.delete('/contacts/' + id)
            .success(function (data) {
                if (data.succ)
                    $scope.contacts.splice(index, 1);
                else
                    alert(data.result);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    }

});