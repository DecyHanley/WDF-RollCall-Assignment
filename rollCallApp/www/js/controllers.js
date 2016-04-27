angular.module('starter.controllers', [])

.controller('LoginCtrl', function($scope) {})

.controller('RegisterCtrl', function($scope) {})

.controller('StudentsCtrl', function($scope, Students) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.students = Students.all();
  $scope.remove = function(student) {
    Students.remove(student);
  };
})

.controller('StudentDetailCtrl', function($scope, $stateParams, Students) {
  $scope.student = Students.get($stateParams.studentId);
})

.controller('SettingsCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
