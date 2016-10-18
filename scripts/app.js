angular.module("todoListApp", [])
.controller("mainCtrl", function($scope) {
  $scope.helloworld = function() {
    console.log("Hello There!  This is the helloWorld controller function, in the mainCtrl");
  };
});
