angular.module('rollcallapp.controllers', ["ionic", "firebase"])
.controller("loginCtrl", function($scope, $state, $ionicHistory, Items) {
  var ref = new Firebase("https://dh-rollcallapp.firebaseio.com");
  $scope.items = Items;
  $scope.logout = function() {
    ref.unauth();
    $state.go('tabs.login');
    $ionicHistory.clearHistory();
    $ionicHistory.clearCache();
    $ionicHistory.nextViewOptions({ disableBack: true, historyRoot: true });
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
  $scope.goRegister = function() {
    $state.go('tabs.register');
  }
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
  $scope.createCourse = function() {
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
  $scope.goCreateCourse = function() {
    $state.go('tabs.createCourse');
  };
  $scope.goStudents = function() {
    $state.go('tabs.students');
  };
})
.controller("studentsCtrl", function($scope, $state, Students) {
  $scope.students = Students;
  $scope.addStudent = function() {
    var studName = document.getElementById("studName").value;
    var studCourse = document.getElementById("studCourse").value;
    var studChecked = document.getElementById("studChecked").value;
    if (studName) {
      $scope.students.$add({
        "studName": studName,
        "studCourse": studCourse,
        "studChecked": studChecked
      });
    }
    $state.go('tabs.students');
  };
  $scope.goAddStudent = function() {
    $state.go('tabs.addStudent');
  };
})
