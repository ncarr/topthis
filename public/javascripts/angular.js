var app = angular.module('topThis', []);
app.controller('mainCtrl', function ($scope, $http) {
    $scope.getActors = function(){
        $http({
            method: 'GET',
            url: 'database/entries'
        }).then(function success(response) {
            $scope.actors = response.data;
            $scope.index = random();
        }).then(function error(response) {
        });
    };
    $scope.getActors();

    $scope.thing = 1;
    var random = function(){
        return Math.round(Math.random()*($scope.actors.length-1));
    };

    $scope.upvote = function() {
        $http({
            method: 'PUT',
            url: 'database/'+$scope.actors[$scope.index].name+'/upvote'
        }).then(function success(response) {
        }).then(function error(response) {
        });
        //$scope.actors[$scope.index].rating +=1;
        location.reload();
    };
    $scope.downvote = function() {
        $scope.actors[$scope.index].rating -=1;
        location.reload();
    };

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
    };
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
    };
});