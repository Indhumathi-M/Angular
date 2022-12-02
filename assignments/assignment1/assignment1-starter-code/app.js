(function ()  {
 'use strict';
 angular.module('LunchCheck', [])
 .controller('LunchCheckController',LunchCheckController)

 function LunchCheckController ($scope)  {
    $scope.itemName;
    $scope.result;
    $scope.items = [];

    $scope.checkIfTooMuch = function() {
        $scope.items = $scope.itemName ? $scope.itemName.split(',') : [];
        console.log($scope.items)
        if(!$scope.items.length)
            $scope.result = 'Please enter data first'
        else if($scope.items.length <= 3)
            $scope.result = 'Enjoy!'
        else
            $scope.result = 'Too Much!'
        }
 }
})();