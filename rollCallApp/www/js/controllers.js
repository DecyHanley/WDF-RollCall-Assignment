angular.module('rollcallapp.controllers', ["ionic", "firebase"])
.controller("loginCtrl", function($scope, $state, Items) {
  var ref = new Firebase("https://dh-rollcallapp.firebaseio.com");
  $scope.items = Items;
  $scope.logout = function() {
    ref.unauth();
    $state.go('tabs.login');
  };
  $scope.addItem = function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    ref.authWithPassword({
      email: email,
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
.controller("registerCtrl", function($scope, $state, Items) {
  $scope.items = Items;
  $scope.addItem = function() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var ref = new Firebase("https://dh-rollcallapp.firebaseio.com");
    ref.createUser({
      email: email,
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
.controller("coursesCtrl", function($scope, $state, Courses) {
  $scope.courses = Courses;
  $scope.addCourses = function() {
    var courseName = document.getElementById("courseName").value;
    var courseDay = document.getElementById("courseDay").value;
    var courseTime = document.getElementById("courseTime").value;
    if (courseName) {
      $scope.courses.$add({
        "courseName": courseName,
        "courseDay": couresDay,
        "courseTime": courseTime
      });
    }
    $state.go('tabs.courses');
  };
  /*$scope.delete = function() {
    var ref = new Firebase("https://dh-rollcallapp.firebaseio.com");
    ref.remove();
    alert("Code Commented out deletes everything not just one thing");
  };*/
  $scope.addCourses = function() {
    state.go('tabs.createCourse');
  };
  /*$scope.goCourses = function(courses) {
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
  };*/
})
.controller("studentsCtrl", function($scope, $state, Students) {
  $scope.students = Students;
  $scope.addStudents = function() {
    var studName = document.getElementById("studName").value;
    var studCourse = document.getElementById("studCourse").value;
    if (studName) {
      $scope.students.$add({
        "studName": studName,
        "studCourse": studCourse
      });
    }
    $state.go('tabs.students');
  };
  /*$scope.delete = function() {
    var ref = new Firebase("https://dh-rollcallapp.firebaseio.com");
    ref.remove();
    alert("Code Commented out deletes everything not just one thing");
  };*/
  $scope.addStudents = function() {
    state.go('tabs.createStudent');
  };
})
