// JavaScript Document
var firstapp = angular.module('firstapp', [
    'ui.router',
    'phonecatControllers',
    'templateservicemod',
    'navigationservice'
]);

firstapp.config(function($stateProvider, $urlRouterProvider,$httpProvider) {

    // for http request with session
    $httpProvider.defaults.withCredentials = true;

    $stateProvider

    .state('home', {
        url: "/home",
        templateUrl: "views/template.html",
        controller: 'HomeCtrl'
    })
    .state('MobileCtrl', {
        url: "/getallmobiles",
        templateUrl: "views/template.html",
        controller: 'MobileCtrl'
    })
    .state('MobDetailCtrl',{
      url: "/getid/:id",
      templateUrl: "views/template.html",
      controller: 'MobDetailCtrl'
    })
    .state('MainCtrl',{
      url: "/main",
      templateUrl: "views/template.html",
      controller: 'MainCtrl'
    });




    $urlRouterProvider.otherwise("/home");

});
firstapp.filter('serverimage', function() {
  return function(input) {
    if (input) {
      return input;
      // return  "http://wohlig.co.in/newfynx/uploads/" + input;
    } else {
      return "img/logo.png";
    }
  };
});



firstapp.directive('img', function($compile, $parse) {
    return {
        restrict: 'E',
        replace: false,
        link: function($scope, element, attrs) {
            var $element = $(element);
            if(!attrs.noloading)
            {
                $element.after("<img src='img/loading.gif' class='loading' />");
                var $loading = $element.next(".loading");
                $element.load(function() {
                    $loading.remove();
                    $(this).addClass("doneLoading");
                });
            }
            else
            {
                $($element).addClass("doneLoading");
            }
        }
    };
});
