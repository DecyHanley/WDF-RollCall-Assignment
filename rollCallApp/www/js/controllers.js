angular.module('rollcallapp.controllers', ["ionic", "firebase"])

.controller("loginCtrl", function($scope, Items, $state) {
  var ref = new Firebase("https://dh-rollcallapp.firebaseio.com");
  $scope.items = Items;

  $scope.logout = function() {
    ref.unauth();
    $state.go('tabs.login');
  };
  $scope.addItem = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    ref.authWithPassword({
        email: username,
        password: password
    }, function(error, authData)  {
      if (error)  {
          console.log("Login Failed!", error);
      } else {
        console.log("Authenticated successfully with payload:", authData);
        $state.go('tabs.courses');
      }
    });
  };
})

.controller("registerCtrl", function($scope, Items, $state) {
  $scope.items = Items;
  $scope.addItem = function() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var ref = new Firebase("https://dh-rollcallapp.firebaseio.com");
    ref.createUser({
      email: username,
      password: password
    },  function(error, userData) {
      if (error) {
        console.log("Error creating user:", error);
      } else {
        console.log("Successfully created user account with uid:", userData.uid);
        $state.go('tabs.login');
      }
    });
  };
})

.controller("coursesCtrl", function($scope, Courses) {
    $scope.courses = Courses;
    $scope.addCourses = function() {
      var courseName = document.getElementById("courseName").value;
      var day = document.getElementById("courseDay").value;
      var courseTime = document.getElementById("courseTime").value;
      if (courseName) {
        $scope.courses.$add({
          "courseName": courseName,
          "day": day,
          "courseTime": courseTime
        });
      }
      $state.go('tabs.courses');
    };
    $scope.addcourses = function() {
      state.go('tabs.createCourse');
    };
    $scope.gocourses = function(courses) {
      var course = courses;
      if (course == 'Creative Multimedia') {
        state.go('tabs.cmm');
      }
      if (course == 'Digital Animation Production') {
        state.go('tabs.dap');
      }
      if (course == 'Game Art and Design') {
        state.go('tabs.gad');
      }
      if (course == 'Business Studies') {
        state.go('tabs.bs');
      }
    };
})
