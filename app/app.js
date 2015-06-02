angular.module('auditorii', [
  'ngSanitize'
]).

  controller('roomCtrl', function ($scope) {
    $scope.appTitle = "<b>Classrooms Reservation</b>";

    $scope.rooms = [
      {number: '432A', title: 'Picasso room'},
      {number: '428B', title: 'Hegel room'},
      {number: '416C', title: 'Humboldt room'}
    ];

    // reserving the room
    $scope.reserve = function (room) {
      room.startTime = new Date();
      $scope.rooms.push(angular.copy(room));
      delete $scope.room;
    }
  });

