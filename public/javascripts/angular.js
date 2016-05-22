var app = angular.module('topThis', []);
app.controller('mainCtrl', function ($scope, $http) {

    $http({
        method: 'GET',
        url: 'database'
    }).then(function success(response) {
        $scope.activeJobs = response.data;
    }).then(function error(response) {
    });



    $scope.name = 'misha';
    $scope.ratings = [{upvotes:0}, {upvotes:0}];
    $scope.images = [{url: "ge.JPG"}, {url: "datboi.jpg"}];
    $scope.upvote1 = function(){
        if ($scope.ratings[0].voted) {
            $scope.ratings[0].upvotes -= 1;
            $scope.ratings[0].voted = false;
        } else {
            $scope.ratings[0].upvotes += 1;
            $scope.ratings[0].voted = true;
        }
        if ($scope.ratings[1].voted) {
            $scope.ratings[1].upvotes -= 1;
            $scope.ratings[1].voted = false;
        }
    }
    $scope.upvote2 = function(){
        if ($scope.ratings[1].voted) {
            $scope.ratings[1].upvotes -= 1;
            $scope.ratings[1].voted = false;
        } else {
            $scope.ratings[1].upvotes += 1;
            $scope.ratings[1].voted = true;
        }
        if ($scope.ratings[0].voted) {
            $scope.ratings[0].upvotes -= 1;
            $scope.ratings[0].voted = false;
        }
    }
});