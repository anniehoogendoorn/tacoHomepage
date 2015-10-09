dailyTaco.controller('ShowcaseCtrl', function ShowcaseCtrl($scope, GamesFactory) {
  $scope.showmeSweeper=GamesFactory.showmeSweeper;
  $scope.GamesFactory = GamesFactory;

  $scope.print = function() {
    console.log($scope.showmeSweeper);
  }
  // other game booleans go here
});
