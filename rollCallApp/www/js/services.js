angular.module('rollcallapp.services', [])

.factory("Items", function($firebaseArray) {
  var itemsRef = new Firebase("https://dh-rollcallapp.firebaseio.com/items");
  return $firebaseArray(itemsRef);
})
.factory("Courses", function($firebaseArray){
  var coursesRef = new Firebase("https://dh-rollcallapp.firebaseio.com/items/courses");
  return $firebaseArray(coursesRef);
})
