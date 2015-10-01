dailyTaco.controller('BannerCtrl', function BannerCtrl($scope) {
  function cycleBackgrounds() {
      var index = 0;

      $imageEls = $('.toggle-image');
      $pEls = $('.banner-text');
      //images to be cycled.
      setInterval(function () {
        // We can use same index for ps and imgs
        index = index + 1 < $imageEls.length ? index + 1 : 0;

        // Show the next image.
        $imageEls.eq(index).addClass('show');
        $pEls.eq(index).addClass('show');


        // Hide the previous image.
        $imageEls.eq(index - 1).removeClass('show');
        $pEls.eq(index - 1).removeClass('show');

      }, 5000);
    };

    angular.element(document).ready(function () {
      cycleBackgrounds();
    });
  });
