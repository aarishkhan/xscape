angular.module('app.controllers', ['ngCordova'])

  .controller('WinCtrl', ["$scope", function ($scope) {

    console.log("win ctrl called");
  }])

  .controller('FindCtrl', ["$scope", function ($scope, $ionicLoading, $compile) {


    //   function initialize() {
    //
    //   //   var myLatLng = {lat: 43.07493, lng: -89.381388};
    //   //
    //   //   var map = new google.maps.Map(document.getElementById('map'), {
    //   //     zoom: 16,
    //   //     mapTypeControl: false,
    //   //
    //   //     streetViewControl: false,
    //   //     center: myLatLng
    //   //   });
    //   //
    //   //   var marker = new google.maps.Marker({
    //   //     position: myLatLng,
    //   //     map: map,
    //   //     title: 'Xscape'
    //   //
    //   //   });
    //   // }
    //   // google.maps.event.addDomListener(window, 'load', initialize);
    //
    //
    //
    //
    // //});
  }])
  .controller('MainCtrl', ["$scope", "$state", "$stateParams", "$rootScope", "$ionicHistory", function ($scope, $state, $stateParams, $rootScope, $ionicHistory) {
    $ionicHistory.nextViewOptions({
      disableBack: true
    });
    console.log("main ctrl called");
    $state.go('win');
  }])
  .controller('SantaCtrl', ["$scope", "$timeout", function ($scope, $timeout) {
    $scope.$on('$ionicView.loaded', function () {
      ionic.Platform.ready(function () {
        $timeout(function () {
          if (navigator && navigator.splashscreen) navigator.splashscreen.hide();
        }, 500);
      });
    });
  }])
  .controller('SelectTimeCtrl', ["$scope", function ($scope) {
    $scope.timeList = ["01-12-16-10.30am", "01-12-16-10.50am", "01-12-16-11.10am", "01-12-16-14.20pm"];
  }])
  .controller('ConfirmBookingCtrl', ["$scope", "$stateParams", function ($scope, $stateParams) {
    $scope.selectedTime = $stateParams.time;
    console.dir($stateParams.time);
  }])
  .controller('BookingsCtrl', ["$scope", function ($scope) {
    $scope.bookings = ["Booking Ref #SANTA001"];
  }])
  .controller('FaqCtrl', ["$scope", function ($scope) {

  }])
  .controller('AdventCtrl', ["$scope", function ($scope) {

    $scope.dates = [
      {value: 1},
      {value: 2},
      {value: 3},
      {value: 4},
      {value: 5},
      {value: 6},
      {value: 7},
      {value: 8},
      {value: 9},
      {value: 10},
      {value: 11},
      {value: 12},
      {value: 13},
      {value: 14},
      {value: 15},
      {value: 16},
      {value: 17},
      {value: 18},
      {value: 19},
      {value: 20},
      {value: 21},
      {value: 22},
      {value: 23},
      {value: 24}
    ];
  }])
  .controller('AdventDateCtrl', ["$scope", "$stateParams", function ($scope, $stateParams) {

    $scope.selectedAdventDate = $stateParams.date;
    $scope.bells = [
      {inActive: 'img/button_1unselected.png', active: 'img/button_1selected.png'},
      {inActive: 'img/button_2unselected.png', active: 'img/button_2selected.png'},
      {inActive: 'img/button_3unselected.png', active: 'img/button_3selected.png'}
    ];

    $scope.toggleMe = function ($event, bell) {
      console.log($event.currentTarget);
      angular.element($event.currentTarget).attr('src', bell.active);


    };

  }])
  .controller('HorizontalScrollFooterCtrl', ["$scope", "$rootScope", "$state", "$ionicHistory", function ($scope, $rootScope, $state, $ionicHistory) {

    var mainViewUrl = 'app';
    $scope.activeStateName = 'santa';

    $scope.goToState = function (stateUrl) {

      $ionicHistory.nextViewOptions({
        disableBack: true
      });
      $scope.activeStateName = stateUrl;
      $state.go(stateUrl);

    };

    $scope.viewsData = [
      {tabTitle: "Meet Santa", tabIcon: "icon-meet-santa", parentViewUrl: mainViewUrl, viewUrl: "santa"},
      {tabTitle: "Santa Selfie", tabIcon: "icon-selfie", parentViewUrl: mainViewUrl, viewUrl: "selfie"},
      {tabTitle: "Advent", tabIcon: "icon-advent", parentViewUrl: mainViewUrl, viewUrl: "advent"},
      {
        tabTitle: "Win!",
        tabIcon: "icon-win",
        parentViewUrl: mainViewUrl,
        viewUrl: "win",
        activeState: "tab-item-active"
      },
      {tabTitle: "Sleigh Ride", tabIcon: "icon-sleigh-ride", parentViewUrl: mainViewUrl, viewUrl: "ride"},
      {tabTitle: "Find Us", tabIcon: "icon-find-us", parentViewUrl: mainViewUrl, viewUrl: "find-us"},
      {tabTitle: "FAQs", tabIcon: "icon-faq", parentViewUrl: mainViewUrl, viewUrl: "faq"}
    ];
  }])
  .controller('SelfieController', ['$scope', '$ionicPlatform', '$cordovaDevice', '$cordovaCamera', '$cordovaToast', function ($scope, $ionicPlatform, $cordovaDevice, $cordovaCamera, $cordovaToast) {
    $ionicPlatform.ready(function() {

      var canvas = document.getElementById("image-canvas");
      var context = canvas.getContext("2d");
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      var options = {
        quality: 100, // MAX Quality
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: window.innerWidth,
        targetHeight: window.innerHeight,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: true,
        correctOrientation: true,
        cameraDirection: 1
      };

      $scope.takePicture = function() {
        $cordovaCamera.getPicture(options).then(
          function(imageData) {
            var cameraImage = "data:image/jpeg;base64," + imageData;
            var filterImage = 'img/santa_face.png';
            var backImage, frontImage;
            var imagesUrls = [];
            var imageObjectArray = [];
            var imagesOk = 0;

            imagesUrls.push(cameraImage);
            imagesUrls.push(filterImage);

            loadAllImages();

            function loadAllImages() {
              imagesUrls.forEach(function(imgUrl) {
                var imageInstance = new Image();
                imageObjectArray.push(imageInstance);
                imageInstance.onload = function() {
                  imagesOk++;
                  allImagesLoaded();
                };
                imageInstance.src = imgUrl;
              });
            }

            function allImagesLoaded() {
              if (imagesOK == imagesUrls.length) {
                backImage = imageObjectArray[0];
                frontImage = imageObjectArray[1];
                context.drawImage(backImage, 0, 0, canvas.width, canvas.height);
                context.drawImage(frontImage, 0, 0, canvas.width, canvas.height);
              }
            }
          },
          function(err) {
            console.log(err);
          });
      };

      if($cordovaDevice.getPlatform() == "iOS") {
        $scope.cleanup = function() {
          $cordovaCamera.cleanup().then(function() {}, function() {});
        }
      }

      $scope.savePicture = function() {
        window.canvas2ImagePlugin.saveImageDataToLibrary(
          function success(response) {
            $cordovaToast.showLongBottom('Photo has been saved to album').then(
              function success() {
                $scope.cleanup && $scope.cleanup();
              },
              function failure(err) {
                console.log(err);
              }
            );
          },
          function failure(err) {
            console.log(err);
          },
          canvas
        );
      };

      (function() {
        $scope.takePicture();
      })();
    });
  }]);
