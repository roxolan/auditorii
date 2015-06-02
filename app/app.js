angular.module('auditorii', [
  'ngSanitize'
]).

  controller('roomCtrl', function ($scope) {
    $scope.appTitle = "<b>Classrooms Reservation</b>";

    $scope.rooms = [
      {number: '432A'},
      {number: '428B'},
      {number: '416C'}
    ];

    // reserving the room
    $scope.reserve = function (room) {
      $scope.rooms.push(angular.copy(room));
      delete $scope.room;
    }
  });

