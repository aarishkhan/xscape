
angular.module ('starter', ['ionic', 'app.controllers', 'app.directives','templates','pickadate'])

  .run (["$ionicPlatform",function ($ionicPlatform) {
    $ionicPlatform.ready (function () {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar (true);
        cordova.plugins.Keyboard.disableScroll (true);

      }
      if (window.StatusBar) {
        // org.apache.cordova.statusbar required
        StatusBar.styleDefault ();
      }
    });

    // $ImageCacheFactory.Cache([
    //   "img/background.png",
    //   "img/beads.png",
    //   "img/navigation_bar.png",
    //   "img/select_date.png",
    //   "img/view_mybookings.png"
    // ]).then(function(){
    //   console.log("Images done loading!");
    // },function(failed){
    //   console.log("An image failed: "+failed);
    // });



  }])

  .config (["$stateProvider", "$urlRouterProvider", "$ionicConfigProvider",function ($stateProvider, $urlRouterProvider, $ionicConfigProvider) {


    $ionicConfigProvider.backButton.previousTitleText
    (false).text ('');
    $ionicConfigProvider.views.swipeBackEnabled (false);
    $ionicConfigProvider.views.maxCache (8);
    $ionicConfigProvider.views.transition("android");
    $ionicConfigProvider.navBar.alignTitle ("center");


    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive


    // Each tab has its own nav history stack:
      .state ('santa', {
        url        : '/app/santa',
        templateUrl: 'meet-santa.html',
        controller : 'SantaCtrl'

      })
      .state ('win', {
        url        : '/app/win',
        templateUrl: 'win.html',
        controller : 'WinCtrl'

      })
      .state ('select', {
        url        : '/app/selectTime',
        templateUrl: 'win-select-time.html',
        controller : 'SelectTimeCtrl'

      })
      .state ('confirm', {
        url        : '/app/confirmBooking/:time',
        templateUrl: 'win-confirm-booking.html',
        controller : 'ConfirmBookingCtrl'


      })
      .state ('bookings', {
        url        : '/app/myBookings',
        templateUrl: 'win-my-bookings.html',
        controller : 'BookingsCtrl'

      })

      .state ('find-us', {
        url        : '/app/find-us',
        templateUrl: 'find-us.html',
        controller : 'FindCtrl'

      })

      .state ('faq', {
        url        : '/app/faq',
        templateUrl: 'faq.html',
        controller : 'FaqCtrl'

      })

      .state('selfie',{
        url        : '/app/selfie',
        templateUrl: 'selfie.html',

      })
      .state('advent',{
        url        : '/app/advent',
        templateUrl: 'advent.html',
        controller : 'AdventCtrl'

      })
      .state('advent-date',{
        url        : '/app/advent-date/:date',
        templateUrl: 'advent-date.html',
        controller : 'AdventDateCtrl'

      })
      .state('ride',{
        url        : '/app/ride',
        templateUrl: 'ride.html',

      })

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise ('/app/santa');

  }]);
