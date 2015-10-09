var dailyTaco = angular.module('dailyTaco', ['ui.router']);

dailyTaco.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: '',
    views: {
      'header': {
        templateUrl: 'partials/header.html'
      },
      'body':   {
        templateUrl: 'partials/home.html',
        controller: 'BannerCtrl'
      },
      'showcase': {
        templateUrl: 'partials/showcase.html',
        controller: 'ShowcaseCtrl'
      },
      'footer': {
        templateUrl: 'partials/footer.html'
      }

    }
  });

  $stateProvider.state('home.game1', {
    url: '/game1',
    views: {
      'currentgame': {
        templateUrl: 'partials/game1.html',
        controller: "TacosweeperCtrl"
      }
    }
  });

  // $stateProvider.state('home.game2', {
  //   url: '/game2',
  //   views: {
  //     'currentgame': {
  //       templateUrl: 'partials/game2.html'
  //     }
  //   }
  // });



  // Other states here
});
