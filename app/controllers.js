auditorii.controller('roomCtrl', function ($scope, $filter) {
  $scope.appTitle = $filter("uppercase")("<b>Classrooms Reservation</b>");
  $scope.showAlert = true;
  $scope.alertTopic = "There is an issue!";
  $scope.alertMessage = "You should provide info about the room and its curator!";
  $scope.closeAlert = function () {
    $scope.showAlert = false;
  };

  // List of rooms
  $scope.rooms = [
    {number: '432A', title: 'Picasso room'},
    {number: '428B', title: 'Hegel room'},
    {number: '416C', title: 'Humboldt room'}
  ];

  // List of room curators
  $scope.curators = [
    "Mary Johnson",
    "Gary Donovan",
    "Kira Lembrooq",
    "Lisa Dreary"
  ];

  // reserving the room
  $scope.reserve = function (room) {
    room.startTime = new Date();
    $scope.rooms.push(angular.copy(room));
    delete $scope.room;
  }
});
