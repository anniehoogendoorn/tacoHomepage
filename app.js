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

  $stateProvider.state('home.game2home', {
    url: '/game2home',
    views: {
      'currentgame': {
        templateUrl: 'partials/game2/home.html'
      }
    }
  });

  $stateProvider.state('home.game2game', {
    url: '/game2game',
    views: {
      'currentgame': {
        templateUrl: 'partials/game2/game.html',
        controller: 'GamesCtrl'
      }
    }
  });



  // Other states here
});
