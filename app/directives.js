auditorii
  .directive("alert", function () {
  return {
    restrict: 'E',
    scope: {
      topic: '=topic',
      description: '=description',
      close: '&'
    },
    templateUrl: "templates/alert.html",
    replace: true,
    transclude: true
  };
  })
  /*
  .directive("accordion", function () {

  })
   */
  .directive("accordionItem", function () {
    return {
      restrict: 'E',
      scope: {
        title: "@"
      },
      transclude: true,
      templateUrl: "templates/accordionItem.html",
      link: function (scope, element, attrs, ctrl, transcludeFn) {
        element.bind("click", function () {
          scope.$apply(function () {
            scope.active = !scope.active;
          });
        });
      }
    }
  })