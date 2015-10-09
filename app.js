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

  $stateProvider.state('game1', {
    url: '/game1',
    views: {
      'header': {
      templateUrl: 'partials/header.html'
      },
      'body': {
        templateUrl: 'partials/game1.html',
        controller: "TacosweeperCtrl"
      },
      'showcase': {
        templateUrl: 'partials/showcase.html',
        controller: 'ShowcaseCtrl'
      }
    }
  });

  $stateProvider.state('game2home', {
    url: '/game2home',
    views: {
      'header': {
      templateUrl: 'partials/header.html'
      },
      'body': {
        templateUrl: 'partials/game2/home.html'
      },
      'showcase': {
        templateUrl: 'partials/showcase.html',
        controller: 'ShowcaseCtrl'
      }
    }
  });

  $stateProvider.state('game2game', {
    url: '/game2game',
    views: {
      'header': {
      templateUrl: 'partials/header.html'
      },
      'body': {
        templateUrl: 'partials/game2/game.html',
        controller: 'GamesCtrl'
      },
      'showcase': {
        templateUrl: 'partials/showcase.html',
        controller: 'ShowcaseCtrl'
      }
    }
  });

  $stateProvider.state('dino', {
    url: '/dino',
    views: {
      'header': {
      templateUrl: 'partials/header.html'
      },
      'body': {
        templateUrl: 'partials/dude_n_dino.html',
      },
      'showcase': {
        templateUrl: 'partials/showcase.html',
        controller: 'ShowcaseCtrl'
      }
    }
  });




  // Other states here
});
