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
  .directive("accordion", function () {
    return {
      restrict: 'E',
      template: "<div ng-transclude></div>",
      transclude: true,
      controller: function ($scope, $element, $attrs, $transclude) {
        var accordionItems = [];

        var addAccordionItem = function (accordionScope) {
          accordionItems.push(accordionScope);
        };

        var closeAll = function () {
          angular.forEach(accordionItems, function (accordionScope) {
            accordionScope.active = false;
          });
        };

        return {
          addAccordionItem: addAccordionItem,
          closeAll: closeAll
        }
      }
    }
  })
  .directive("accordionItem", function () {
    return {
      restrict: 'E',
      scope: {
        title: "@"
      },
      transclude: true,
      require: "^accordion",
      templateUrl: "templates/accordionItem.html",
      link: function (scope, element, attrs, ctrl, transcludeFn) {
        ctrl.addAccordionItem(scope);
        element.bind("click", function () {
          ctrl.closeAll();
          scope.$apply(function () {
            scope.active = !scope.active;
          });
        });
      }
    }
  });