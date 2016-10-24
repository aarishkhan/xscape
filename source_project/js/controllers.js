angular.module('app.controllers', ['ngCordova', 'ngTouch'])

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

      $scope.imageData = false;

      // initialize the canvas
      var canvas;

      // option to feed into camera for initialization
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

      /**
       * take picture method
       */
      $scope.takePicture = function() {
        $cordovaCamera.getPicture(options).then(
          function(imageData) {
            $scope.imageData = imageData ? true : false;

            var isDragging = false;
            canvas = document.getElementById("image-canvas");
            var canvasOffset = angular.element("#image-canvas").offset();
            var context = canvas.getContext("2d");

            // set canvas width and height respective to the device
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;

            // canvas offset
            var offsetX = canvasOffset.left;
            var offsetY = canvasOffset.top;


            var cameraImage = "data:image/jpeg;base64," + imageData;
            var filterImage = 'img/santa_face.png';
            var backImage, frontImage;
            var imagesUrls = [];
            var imageObjectArray = [];
            var imagesOk = 0;

            var maskItemX = 256;
            var maskItemY = 256;
            var canMouseX = 0;
            var canMouseY = 0;

            imagesUrls.push(cameraImage); // push taken image in the background
            imagesUrls.push(filterImage); // push filter image in the front

            loadAllImages(); // load the final result after taking the snapshot

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
              if (imagesOk == imagesUrls.length) {
                backImage = imageObjectArray[0];
                frontImage = imageObjectArray[1];
                start();
              }
            }

            function start() {
              context.clearRect(0, 0, canvas.width, canvas.height);
              context.drawImage(backImage, 0, 0, canvas.width, canvas.height);
              context.globalCompositeOperation = "source-over";
              context.drawImage(frontImage, maskItemX, maskItemY);

              // context.drawImage(backImage, 0, 0, canvas.width, canvas.height);
              // context.drawImage(frontImage, 0, 0, canvas.width, canvas.height);
            }

            function hitImage(x, y) {
              return (x > maskItemX && x < maskItemX + frontImage.width && y > maskItemY && y < maskItemY + frontImage.height);
            }

            function handleMouseDown(e) {
              canMouseX = parseInt(e.gesture.center.pageX - offsetX);
              canMouseY = parseInt(e.gesture.center.pageY - offsetY);
              // set the drag flag
              isDragging = hitImage(canMouseX, canMouseY);
            }

            function handleMouseUp(e) {
              // canMouseX = parseInt(e.gesture.center.pageX - offsetX);
              // canMouseY = parseInt(e.gesture.center.pageY - offsetY);
              // clear the drag flag
              isDragging = false;
            }

            function handleMouseOut(e) {
              handleMouseUp(e);
              // canMouseX = parseInt(e.gesture.center.pageX - offsetX);
              // canMouseY = parseInt(e.gesture.center.pageY - offsetY);
              // user has left the canvas, so clear the drag flag
              //isDragging=false;
            }

            function handleMouseMove(e) {
              // if the drag flag is set, clear the canvas and draw the image
              if (isDragging) {

                imageClick = false;

                mouseX = parseInt(e.gesture.center.pageX - offsetX);
                mouseY = parseInt(e.gesture.center.pageY - offsetY);

                // move the image by the amount of the latest drag
                var dx = mouseX - canMouseX;
                var dy = mouseY - canMouseY;
                maskItemX += dx;
                maskItemY += dy;
                // reset the startXY for next time
                canMouseX = mouseX;
                canMouseY = mouseY;

                start();

                // context.clearRect(0, 0, canvas.width, canvas.height);
                /*
                context.putImageData(frontImage, canvas.width, canvas.height);
                context.drawImage(frontImage, canMouseX - 128 / 2, canMouseY - 120 / 2, 128, 120);
                */
              }
            }

            $scope.onTouch = function(e) {
              console.log('Touch called inside');
              handleMouseDown(e);
            };

            $scope.onRelease = function(e) {
              console.log('Release called inside');
              handleMouseUp(e);
            };

            $scope.onDrag = function(e) {
              console.log('Drag called inside');
              handleMouseMove(e);
            };
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
