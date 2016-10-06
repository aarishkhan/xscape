angular.module ('app.controllers', [])

  .controller ('WinCtrl',["$scope" ,function ($scope) {

    console.log("win ctrl called");
  }])

  .controller ('FindCtrl',["$scope", function ($scope, $ionicLoading, $compile) {


      function initialize() {

        var myLatLng = {lat: 43.07493, lng: -89.381388};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          mapTypeControl: false,

          streetViewControl: false,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Xscape'

        });
      }
      google.maps.event.addDomListener(window, 'load', initialize);




    //});
  }])


  .controller ('MainCtrl',["$scope", "$state", "$stateParams", "$rootScope", "$ionicHistory", function ($scope, $state, $stateParams, $rootScope, $ionicHistory) {

    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    console.log("main ctrl called");
     $state.go('win');


  }])
  .controller ('SantaCtrl',["$scope","$timeout", function ($scope,$timeout) {

    $scope.$on('$ionicView.loaded', function() {
      ionic.Platform.ready( function() {
        $timeout(function () {
          if(navigator && navigator.splashscreen) navigator.splashscreen.hide();
        },500)
    
      });
    });
   

  }])
  .controller ('SelectTimeCtrl',["$scope",function ($scope) {
    $scope.timeList = ["01-12-16-10.30am", "01-12-16-10.50am", "01-12-16-11.10am", "01-12-16-14.20pm"];
  }])

  .controller ('ConfirmBookingCtrl',["$scope", "$stateParams", function ($scope, $stateParams) {

    $scope.selectedTime = $stateParams.time;

    console.dir ($stateParams.time);


  }])

  .controller ('BookingsCtrl',["$scope", function ($scope) {

    $scope.bookings = ["Booking Ref #SANTA001"];

  }])

  .controller ('FaqCtrl',["$scope", function ($scope) {

  }])


  .controller ('AdventCtrl',["$scope", function ($scope) {

    $scope.dates=[
      {value:1},
      {value:2},
      {value:3},
      {value:4},
      {value:5},
      {value:6},
      {value:7},
      {value:8},
      {value:9},
      {value:10},
      {value:11},
      {value:12},
      {value:13},
      {value:14},
      {value:15},
      {value:16},
      {value:17},
      {value:18},
      {value:19},
      {value:20},
      {value:21},
      {value:22},
      {value:23},
      {value:24}


    ]
  }])

  .controller ('AdventDateCtrl',["$scope","$stateParams", function ($scope,$stateParams) {

    $scope.selectedAdventDate=$stateParams.date;
    $scope.bells=[
      {inActive:'img/button_1unselected.png',active:'img/button_1selected.png'},
      {inActive:'img/button_2unselected.png',active:'img/button_2selected.png'},
      {inActive:'img/button_3unselected.png',active:'img/button_3selected.png'}
    ]

    $scope.toggleMe=function($event,bell){
      console.log($event.currentTarget);
      angular.element($event.currentTarget).attr('src',bell.active);


    }

  }])



  .controller ('HorizontalScrollFooterCtrl',["$scope","$rootScope","$state","$ionicHistory", function ($scope,$rootScope,$state,$ionicHistory) {

    var mainViewUrl='app';
    $scope.activeStateName='santa';

    $scope.goToState=function(stateUrl){

      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      $scope.activeStateName=stateUrl;
      $state.go(stateUrl);

    }

    $scope.viewsData = [
      {tabTitle: "Meet Santa", tabIcon: "icon-meet-santa", parentViewUrl: mainViewUrl, viewUrl: "santa"  },
      {tabTitle: "Santa Selfie", tabIcon: "icon-selfie", parentViewUrl: mainViewUrl, viewUrl: "selfie"},
      {tabTitle: "Advent", tabIcon: "icon-advent", parentViewUrl: mainViewUrl, viewUrl: "advent"},
      {tabTitle: "Win!", tabIcon: "icon-win", parentViewUrl: mainViewUrl, viewUrl: "win", activeState:"tab-item-active"},
      {tabTitle: "Sleigh Ride", tabIcon: "icon-sleigh-ride", parentViewUrl: mainViewUrl, viewUrl: "ride"},
      {tabTitle: "Find Us", tabIcon: "icon-find-us", parentViewUrl: mainViewUrl, viewUrl: "find-us"},
      {tabTitle: "FAQs", tabIcon: "icon-faq", parentViewUrl: mainViewUrl, viewUrl: "faq"}
    ]


  }])
