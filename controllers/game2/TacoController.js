dailyTaco.controller('TacoCtrl', function TacoCtrl($scope, $stateParams, TacosFactory, UtilitiesFactory) {
  $scope.taco = UtilitiesFactory.findById(TacosFactory.tacos, $stateParams.tacoId);
});
