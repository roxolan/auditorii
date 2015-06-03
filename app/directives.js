auditorii.directive("alert", function () {
  return {
    restrict: 'E',
    scope: {
      topic: '=topic',
      description: '=description',
      close: '&'
    },
    templateUrl: "templates/alert.html",
    replace: true
  };
});