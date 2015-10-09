dailyTaco.directive("downtownBg", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.css({
        'background-image': "url('images/game2/downtown.jpg')",
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      });
    });
  }
});

dailyTaco.directive("stadiumBg", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.css({
        'background-image': "url('images/game2/stadium.jpg')",
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      });
    });
  }
});

dailyTaco.directive("beachBg", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.css({
        'background-image': "url('images/game2/beach.jpg')",
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      });
    });
  }
});

dailyTaco.directive("lakeBg", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.css({
        'background-image': "url('images/game2/lake.jpg')",
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      });
    });
  }
});

dailyTaco.directive("cemeteryBg", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.css({
        'background-image': "url('images/game2/cemetery.jpg')",
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      });
    });
  }
});

dailyTaco.directive("universityBg", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.css({
        'background-image': "url('images/game2/school.jpg')",
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      });
    });
  }
});

dailyTaco.directive("spaceBg", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.css({
        'background-image': 'url("images/game2/space.png")',
        '-webkit-background-size': 'cover',
        '-moz-background-size': 'cover',
        '-o-background-size': 'cover',
        'background-size': 'cover'
      });
    });
  }
});

dailyTaco.directive("colorBg", function() {
  return function (scope, element, attrs) {
    element.bind("click", function() {
      var body = angular.element(document).find('body');
      body.css({
        'background-image': 'none'
      });
    });
  }
});
