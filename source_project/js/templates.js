angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('horizontalScrollFooter.html','<ion-footer-bar class="tsb-icons bar bar-footer no-padding footer-main" style="">\r\n  <div class="tab-nav tabs  tabs-font-color-white has-tabs tsb-ic-wrp">\r\n    <ion-scroll direction="x" class="tsb-hscroll col-100" style="" >\r\n\r\n      <a ng-repeat="viewData in viewsData" ng-class="{\'tab-item-active\':activeStateName==viewData.viewUrl}" ng-click="goToState(\'{{viewData.viewUrl}}\')" class="tab-item {{}} tab-item-custom">\r\n        <!-- ngIf: badge --><!-- ngIf: getIcon() --><i class="icon icon-footer {{viewData.tabIcon}}" ></i>\r\n        <!-- end ngIf: getIcon() --><span class="tab-title">{{viewData.tabTitle}}</span>\r\n      </a>\r\n\r\n    </ion-scroll>\r\n  </div>\r\n</ion-footer-bar>\r\n\r\n\r\n\r\n');
$templateCache.put('advent-date.html','<ion-view view-title="Sleigh Ride">\r\n  <ion-content class="padding " scroll="false">\r\n    <div class="row responsive-md">\r\n      <h1>Advent Date Page</h1>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n\r\n\r\n\r\n\r\n\r\n');
$templateCache.put('advent.html','<ion-view view-title="Sleigh Ride">\r\n  <ion-content class="padding " scroll="false">\r\n    <div class="row responsive-md">\r\n      <h1>Advent page</h1>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n\r\n\r\n\r\n\r\n');
$templateCache.put('faq.html','<ion-view view-title="FAQs">\r\n  <ion-content class="padding " scroll="false">\r\n    <div class="row responsive-md">\r\n     <h1>Faq page</h1>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n\r\n\r\n');
$templateCache.put('find-us.html','<ion-view view-title="Sleigh Ride">\r\n  <ion-content class="padding " scroll="false">\r\n    <div class="row responsive-md">\r\n      <h1>find us page</h1>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n\r\n\r\n\r\n');
$templateCache.put('meet-santa.html','<ion-view view-title="Meet Santa">\r\n  <ion-content class="padding " scroll="false">\r\n    <div class="row responsive-md flex-layout height-100-percent">\r\n\r\n        <div pickadate ng-model="date" no-extra-rows  format="dd/mm/yyyy" min-date="\'2016-12-01\'" max-date="\'2016-12-31\'"  default-date="\'2016-09-01\'"></div>\r\n\r\n      <div class="col-100 padding-horizontal  absolute-bottom-20-percent  app-round-button select-date">\r\n        <a class="button-block text-center anchor-nostyle app-button-font-size height-100-percent col-100" href="#/app/selectTime"></a>\r\n      </div>\r\n      <div class="col-100 padding-horizontal  absolute-bottom-20-percent  app-round-button view-my-bookings">\r\n        <a class="button-block text-center anchor-nostyle app-button-font-size height-100-percent col-100" href="#/app/myBookings"></a>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n\r\n\r\n');
$templateCache.put('ride.html','<ion-view view-title="Sleigh Ride">\r\n  <ion-content class="padding" scroll="false">\r\n    <div class="row responsive-md">\r\n      <h1>Sleigh Ride page</h1>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n\r\n\r\n\r\n');
$templateCache.put('selfie.html','<ion-view view-title="Santa Selfie">\n  <ion-content class="padding " scroll="false">\n    <div class="button-bar">\n      <a class="button button-positive" type="button" ng-click="takePicture()">Retake</a>\n      <a class="button button-balanced" type="button" ng-click="savePicture()">Save</a>\n    </div>\n    <canvas id="image-canvas"\n            on-touch="onTouch($event)"\n            on-release="onRelease($event)"\n            on-drag="onDrag($event)"></canvas>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('win-confirm-booking.html','<ion-view view-title="Confirm Booking">\r\n  <ion-content class="height-occupy "  scroll="false">\r\n    <div class="row responsive-sm responsive-lg font-color " style="">\r\n      <div class="col-100 text-left padding-top">\r\n        <p class=" padding-left app-heading-font-size no-padding-margin-bottom">Confirm Your Booking</p><p class=" padding-left app-heading-font-size"> With Santa!</p>\r\n      </div>\r\n      <p class="padding-left time-stamp">{{selectedTime}}</p>\r\n      <div class="col-100 padding-left padding-right">\r\n        <div class="item item-input form-field">\r\n\r\n          <input type="text"  placeholder="First Name">\r\n        </div>\r\n        <div class="item item-input form-field">\r\n\r\n          <input type="text"  placeholder="Last Name">\r\n\r\n\r\n        </div>\r\n        <div class="item item-input form-field">\r\n\r\n          <input type="email"  placeholder="Email Address">\r\n        </div>\r\n        <div class="item item-input form-field">\r\n\r\n          <input type="text"  placeholder="Number">\r\n        </div>\r\n      </div>\r\n      <p class="padding-left app-paragraph-font-size">By purchasing a ticket, you agree to our <a class="anchor-underline">Terms and Conditions</a> </p>\r\n\r\n      <div class="col-100 padding-top  padding-horizontal  app-round-button pay-with-card ">\r\n        <a class="button-block padding-left padding-right text-center anchor-nostyle app-button-font-size height-100-percent col-100" href="#/app/selectTime"></a>\r\n      </div>\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n');
$templateCache.put('win-my-bookings.html','<ion-view view-title="My Bookings">\r\n  <ion-content class="bookings " scroll="false" >\r\n    <ion-list>\r\n      <ion-item class="item-remove-animate select-time-list item-padding-left-10 item-avatar item-icon-right" ng-repeat="booking in bookings" type="item-text-wrap" href="#/tab/confirmBooking/{{time}}">\r\n\r\n       <div class="padding-vertical ">{{booking}}</div>\r\n       <i class="icon ion-chevron-right icon-accessory red-gradient-font-chevron" style="font-size:30px;">\r\n        </i>\r\n\r\n      </ion-item>\r\n\r\n\r\n    </ion-list>\r\n\r\n\r\n  </ion-content>\r\n</ion-view>\r\n');
$templateCache.put('win-select-time.html','<ion-view view-title="Select Time">\r\n  <ion-content class="" scroll="true" scroll="false">\r\n    <ion-list>\r\n      <ion-item class="item-remove-animate select-time-list item-padding-left-10 item-avatar item-icon-right" ng-repeat="time in timeList" type="item-text-wrap" href="#/app/confirmBooking/{{time}}">\r\n\r\n       <div class=" ">{{time}}</div>\r\n       <i class="icon ion-chevron-right icon-accessory red-gradient-font-chevron" style="font-size:30px;">\r\n        </i>\r\n\r\n      </ion-item>\r\n\r\n\r\n\r\n    </ion-list>\r\n  </ion-content>\r\n</ion-view>\r\n');
$templateCache.put('win.html','<ion-view view-title="Win!" class="view-win">\r\n  <ion-content class="height-occupy win " scroll="false" >\r\n    <div class="row responsive-sm responsive-lg height-100-percent no-padding  " style="">\r\n      <div class="col-100 text-center height-50-percent">\r\n        <img  src="img/win_image.png" class="height-100-percent col-100" style=" ">\r\n      </div>\r\n      <div class="col-100  height-50-percent flex-layout">\r\n        <div class="message-container">\r\n          <p class="text-center padding-top no-padding-margin-bottom app-heading-font-size">\r\n            Win A Luxury\r\n          </p>\r\n          <p class="text-center no-padding-margin-top app-heading-font-size">\r\n            Christmas Hamper Xscape\r\n          </p>\r\n\r\n\r\n          <p class="text-center padding absolute-center-by-margin app-paragraph-font-size" style="max-width:300px;">\r\n          You\'ve got until 23.59pm on December 24th to enter and we\'ll then seelct a winner at random!\r\n          </p>\r\n         </div>\r\n        <div class="col-100 padding-horizontal  absolute-bottom-20-percent  app-round-button enter-now">\r\n          <a class="button-block text-center anchor-nostyle app-button-font-size height-100-percent col-100" href=""></a>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </ion-content>\r\n</ion-view>\r\n');}]);