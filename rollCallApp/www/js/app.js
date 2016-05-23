angular.module('rollcallapp', ['ionic', 'rollcallapp.controllers', 'rollcallapp.services', 'firebase'])
.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
  $ionicConfigProvider.tabs.position('bottom');
  $stateProvider
  // setup an abstract state for the tabs directive
  .state('tabs', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  // Each tab has its own nav history stack:
  .state('tabs.login', {
    url: '/login',
    views: {
      'tab-login': {
        templateUrl: 'templates/tab-login.html',
        controller: 'loginCtrl'
      }
    }
  })
  .state('tabs.register', {
    url: '/register',
    views: {
      'tab-login': {
        templateUrl: 'templates/tab-register.html',
        controller: 'registerCtrl'
      }
    }
  })
  .state('tabs.courses', {
    url: '/courses',
    views: {
      'tab-login': {
        templateUrl: 'templates/tab-courses.html',
        controller: 'coursesCtrl'
      }
    }
  })
  .state('tabs.createCourse', {
    url:'/createCourse',
    views: {
      'tab-login': {
        templateUrl: 'templates/tab-createCourse.html',
        controler: 'courseCtrl'
      }
    }
  })
  .state('tabs.students', {
    url: '/students',
    views: {
      'tab-login': {
        templateUrl: 'templates/tab-students.html',
        controller: 'studentsCtrl'
      }
    }
  })
  .state('tabs.addStudent', {
    url:'/addStudent',
    views: {
      'tab-login': {
        templateUrl: 'templates/tab-addStudent.html',
        controler: 'studentsCtrl'
      }
    }
  })
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/login');
});
