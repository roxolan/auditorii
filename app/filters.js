auditorii.filter("classroom", function () {
  return function (input, separator) {
    var firstPart = input.substring(0, (input.length - 1));
    var secondPart = input.slice(-1);
    return firstPart + separator + secondPart;
  };
});
