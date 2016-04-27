angular.module('starter.services', [])

.factory('Students', function() {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var students = [{
    id: 0,
    face: 'img/ben.png',
    name: 'Ben Sparrow',
    course: 'Creative Multimedia',
    year: '4',
    module: 'Web Development Frameworks',
    studentIn: 'Yes',
    totalClasses: '10/10'
  }, {
    id: 1,
    face: 'img/max.png',
    name: 'Max Lynx',
    course: 'Creative Multimedia',
    year: '4',
    module: 'Web Development Frameworks',
    studentIn: 'Yes',
    totalClasses: '8/10'
  }, {
    id: 2,
    face: 'img/adam.jpg',
    name: 'Adam Bradleyson',
    course: 'Creative Multimedia',
    year: '4',
    module: 'Web Development Frameworks',
    studentIn: 'Yes',
    totalClasses: '6/10'
  }, {
    id: 3,
    face: 'img/perry.png',
    name: 'Perry Governor',
    course: 'Creative Multimedia',
    year: '4',
    module: 'Web Development Frameworks',
    studentIn: 'No',
    totalClasses: '4/10'
  }, {
    id: 4,
    face: 'img/mike.png',
    name: 'Mike Harrington',
    course: 'Creative Multimedia',
    year: '4',
    module: 'Web Development Frameworks',
    studentIn: 'No',
    totalClasses: '2/10'
  }];

  return {
    all: function() {
      return students;
    },
    remove: function(student) {
      students.splice(students.indexOf(student), 1);
    },
    get: function(studentId) {
      for (var i = 0; i < students.length; i++) {
        if (students[i].id === parseInt(studentId)) {
          return students[i];
        }
      }
      return null;
    }
  };
});
