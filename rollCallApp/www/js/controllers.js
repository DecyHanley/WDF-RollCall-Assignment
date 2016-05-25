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
  $scope.addItem = function() {
    var courseName = document.getElementById("courseName").value;
    var courseDay = document.getElementById("courseDay").value;
    var courseTime = document.getElementById("courseTime").value;
    $scope.courses.$add({
      "courseName": courseName,
      "courseDay": courseDay,
      "courseTime": courseTime
    });
    $state.go('tabs.courses');
  };
  $scope.delete = function() {
    /*var courseName = document.getElementById("courseName");
    var courseDay = document.getElementById("courseDay");
    var courseTime = document.getElementById("courseTime");
    $scope.courses.$remove({
      "courseName": courseName,
      "courseDay": courseDay,
      "courseTime": courseTime
    });
    $state.go('tabs.courses');*/
    alert("Delete button coming soon...\nCode implemented, but not working...\nMaybe a bug with Angular...");
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
  $scope.addItem = function() {
    var studName = document.getElementById("studName").value;
    var studCourse = document.getElementById("studCourse").value;
    var studChecked = document.getElementById("studChecked").checked=true;
    $scope.students.$add({
      "studName": studName,
      "studCourse": studCourse,
      "studChecked": studChecked
    });
    $state.go('tabs.students');
  };
  $scope.delete = function() {
    /*var studName = document.getElementById("studName");
    var studCourse = document.getElementById("studCourse");
    var studChecked = document.getElementById("studChecked");
    $scope.students.$remove({
      "studName": studName,
      "studCourse": studCourse,
      "studChecked": studChecked
    });
    $state.go('tabs.students');*/
    alert("Delete button coming soon...\nCode implemented, but not working...\nMaybe a bug with Angular...");
  };
  $scope.goAddStudent = function() {
    $state.go('tabs.addStudent');
  };
  $scope.takeRollCall = function() {
    /*var studChecked = document.getElementById("studChecked");
    $scope.students.$save({
      "studChecked": studChecked
      });
      $state.go('tabs.courses');*/
      alert("Take Roll Call button coming soon...\nCode, doesn't work...");
    };
})
