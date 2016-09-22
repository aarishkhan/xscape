angular.module('templates', []).run(['$templateCache', function($templateCache) {$templateCache.put('horizontalScrollFooter.html','<ion-footer-bar class="tsb-icons bar bar-footer no-padding footer-main" style="">\n  <div class="tab-nav tabs  tabs-font-color-white has-tabs tsb-ic-wrp">\n    <ion-scroll direction="x" class="tsb-hscroll col-100" style="" >\n\n      <a ng-repeat="viewData in viewsData" ng-class="{\'tab-item-active\':activeStateName==viewData.viewUrl}" ng-click="goToState(\'{{viewData.viewUrl}}\')" class="tab-item {{}} tab-item-custom">\n        <!-- ngIf: badge --><!-- ngIf: getIcon() --><i class="icon icon-footer {{viewData.tabIcon}}" ></i>\n        <!-- end ngIf: getIcon() --><span class="tab-title">{{viewData.tabTitle}}</span>\n      </a>\n\n    </ion-scroll>\n  </div>\n</ion-footer-bar>\n\n\n\n');
$templateCache.put('advent-date.html','<ion-view view-title="Advent">\n  <ion-content class="padding advent-date-page advent-background" scroll="false">\n    <div class="row  responsive-sm responsive-md responsive-lg height-100-percent flex-layout">\n      <div class="bow-top"></div>\n\n      <div class="large-advent-date-container">\n        <img class="large-advent-date-img" ng-src="img/box_{{selectedAdventDate}}large.png">\n      </div>\n\n\n      <div class="bells-container">\n        <img ng-src="{{bell.inActive}}" ng-click="toggleMe($event,bell);" ng-repeat="bell in bells"  class="bell">\n\n      </div>\n\n\n\n    </div>\n  </ion-content>\n</ion-view>\n\n');
$templateCache.put('advent.html','<ion-view view-title="Advent">\n  <ion-content class="padding advent-page advent-background" scroll="false">\n    <div class="row  responsive-sm responsive-md responsive-lg height-100-percent flex-layout">\n        <div class="bow-top"></div>\n\n        <div  class="dates-container">\n          <a ng-repeat="date in dates" class="advent-date-anchor " href="#/app/advent-date/{{date.value}}">\n            <img class="advent-date-image" ng-src="img/box_{{date.value}}.png">\n          </a>\n        </div>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('faq.html','<ion-view view-title="FAQs">\n  <ion-content class="padding wood-background">\n    <div class="row responsive-md">\n     <h1>Faq page</h1>\n    </div>\n  </ion-content>\n</ion-view>\n\n\n');
$templateCache.put('find-us.html','<ion-view view-title="Find Us">\n  <ion-content class="wood-background">\n  <div class="row responsive-sm responsive-md responsive-lg height-100-percent ">\n    <div id="map" data-tap-disabled="true" style="" class="padding-vertical">\n\n    </div>\n    <div></div>\n    <p class="text-center padding-top absolute-center-by-margin app-paragraph-font-size " style="max-width:300px; color: white"   >\n   604 Marlborough street\n    </p>\n    <p class="text-center  absolute-center-by-margin app-paragraph-font-size " style="max-width:300px; color: white"   >\n      Milton Avenue\n    </p>\n    <p class="text-center  absolute-center-by-margin app-paragraph-font-size " style="max-width:300px; color: white"   >\n      MK9 33786\n    </p>\n    <div class="col-100 padding-horizontal padding-top  absolute-bottom-20-percent  app-round-button enter-now">\n      <a class="button-block text-center anchor-nostyle app-button-font-size height-100-percent col-100" href=""></a>\n    </div>\n    </div>\n  </ion-content>\n</ion-view>\n\n\n');
$templateCache.put('meet-santa.html','<ion-view view-title="Meet Santa">\n  <ion-content class="padding wood-background" scroll="false">\n    <div class="row responsive-md flex-layout height-100-percent">\n\n        <div pickadate ng-model="date" no-extra-rows  format="dd/mm/yyyy" min-date="\'2016-12-01\'" max-date="\'2016-12-31\'"  default-date="\'2016-09-01\'"></div>\n\n      <div class="col-100 padding-horizontal  absolute-bottom-20-percent  app-round-button select-date">\n        <a class="button-block text-center anchor-nostyle app-button-font-size height-100-percent col-100" href="#/app/selectTime"></a>\n      </div>\n      <div class="col-100 padding-horizontal  absolute-bottom-20-percent  app-round-button view-my-bookings">\n        <a class="button-block text-center anchor-nostyle app-button-font-size height-100-percent col-100" href="#/app/myBookings"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n\n\n');
$templateCache.put('ride.html','<ion-view view-title="Sleigh Ride">\n  <ion-content class="padding wood-background">\n    <div class="row responsive-md">\n      <h1>Sleigh Ride page</h1>\n    </div>\n  </ion-content>\n</ion-view>\n\n\n\n');
$templateCache.put('selfie.html','<ion-view view-title="Santa Selfie">\n  <ion-content class="padding wood-background">\n    <div class="row responsive-md">\n      <h1>Santa Selfie page</h1>\n    </div>\n  </ion-content>\n</ion-view>\n\n\n\n');
$templateCache.put('win-confirm-booking.html','<ion-view view-title="Confirm Booking">\n  <ion-content class="height-occupy wood-background" >\n    <div class="row responsive-sm responsive-lg font-color " style="">\n      <div class="col-100 text-left padding-top">\n        <p class=" padding-left app-heading-font-size no-padding-margin-bottom">Confirm Your Booking</p><p class=" padding-left app-heading-font-size"> With Santa!</p>\n      </div>\n      <p class="padding-left time-stamp">{{selectedTime}}</p>\n      <div class="col-100 padding-left padding-right">\n        <div class="item item-input form-field">\n\n          <input type="text"  placeholder="First Name">\n        </div>\n        <div class="item item-input form-field">\n\n          <input type="text"  placeholder="Last Name">\n\n\n        </div>\n        <div class="item item-input form-field">\n\n          <input type="email"  placeholder="Email Address">\n        </div>\n        <div class="item item-input form-field">\n\n          <input type="text"  placeholder="Number">\n        </div>\n      </div>\n      <p class="padding-left app-paragraph-font-size">By purchasing a ticket, you agree to our <a class="anchor-underline">Terms and Conditions</a> </p>\n\n      <div class="col-100 padding-top  padding-horizontal  app-round-button pay-with-card ">\n        <a class="button-block padding-left padding-right text-center anchor-nostyle app-button-font-size height-100-percent col-100" href="#/app/selectTime"></a>\n      </div>\n    </div>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('win-my-bookings.html','<ion-view view-title="My Bookings">\n  <ion-content class="bookings wood-background" >\n    <ion-list>\n      <ion-item class="item-remove-animate select-time-list item-padding-left-10 item-avatar item-icon-right" ng-repeat="booking in bookings" type="item-text-wrap" href="#/tab/confirmBooking/{{time}}">\n\n       <div class="padding-vertical ">{{booking}}</div>\n       <i class="icon ion-chevron-right icon-accessory red-gradient-font-chevron" style="font-size:30px;">\n        </i>\n\n      </ion-item>\n\n\n    </ion-list>\n\n\n  </ion-content>\n</ion-view>\n');
$templateCache.put('win-select-time.html','<ion-view view-title="Select Time">\n  <ion-content class="wood-background" scroll="true">\n    <ion-list>\n      <ion-item class="item-remove-animate select-time-list item-padding-left-10 item-avatar item-icon-right" ng-repeat="time in timeList" type="item-text-wrap" href="#/app/confirmBooking/{{time}}">\n\n       <div class=" ">{{time}}</div>\n       <i class="icon ion-chevron-right icon-accessory red-gradient-font-chevron" style="font-size:30px;">\n        </i>\n\n      </ion-item>\n\n\n\n    </ion-list>\n  </ion-content>\n</ion-view>\n');
$templateCache.put('win.html','<ion-view view-title="Win!" class="view-win">\n  <ion-content class="height-occupy win wood-background" scroll="false" >\n    <div class="row responsive-sm responsive-lg height-100-percent no-padding  " style="">\n      <div class="col-100 text-center height-50-percent">\n        <img  src="img/win_image.png" class="height-100-percent col-100" style=" ">\n      </div>\n      <div class="col-100  height-50-percent flex-layout">\n        <div class="message-container">\n          <p class="text-center padding-top no-padding-margin-bottom app-heading-font-size">\n            Win A Luxury\n          </p>\n          <p class="text-center no-padding-margin-top app-heading-font-size">\n            Christmas Hamper Xscape\n          </p>\n\n\n          <p class="text-center padding absolute-center-by-margin app-paragraph-font-size" style="max-width:300px;">\n          You\'ve got until 23.59pm on December 24th to enter and we\'ll then seelct a winner at random!\n          </p>\n         </div>\n        <div class="col-100 padding-horizontal  absolute-bottom-20-percent  app-round-button enter-now">\n          <a class="button-block text-center anchor-nostyle app-button-font-size height-100-percent col-100" href=""></a>\n        </div>\n      </div>\n\n\n    </div>\n  </ion-content>\n</ion-view>\n');}]);