angular.module('phonecatControllers', ['templateservicemod', 'navigationservice', 'ui.bootstrap', 'ngSanitize', 'angular-flexslider'])

.controller('HomeCtrl', function($scope, TemplateService, NavigationService, $timeout) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("home");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();

  $scope.mySlides = [
    'http://flexslider.woothemes.com/images/kitchen_adventurer_cheesecake_brownie.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_lemon.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_donut.jpg',
    'http://flexslider.woothemes.com/images/kitchen_adventurer_caramel.jpg'
  ];
})

.controller('headerctrl', function($scope, TemplateService) {
  $scope.template = TemplateService;
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams) {
    $(window).scrollTop(0);
  });
})
.controller('MobileCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("getallmobiles");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.mobile=[];
    NavigationService.getMobiles(function(data) {
      $scope.mobile = data;

      console.log($scope.mobile);
      var data2 = _.chunk(data, 6);
      console.log(data2);

      $scope.mobile = data2;

    });
})
.controller('MobDetailCtrl', function($scope, TemplateService, NavigationService, $http, $stateParams) {
  $scope.template = TemplateService.changecontent("getid");
  $scope.menutitle = NavigationService.makeactive("getid");
$scope.mobdetail=[];
$scope.mesg=[];
var mobid=$stateParams.id;
  NavigationService.getMobDetail(mobid, function(data) {
    $scope.mobdetail = data;
    if($scope.mobdetail.img ==="")
    {
      console.log("inif");
      $scope.mesg.push({
        type:'danger',
        msg: 'Image not found'
      });
    }
    console.log(data);

  });
})
.controller('MainCtrl', function($scope, TemplateService, NavigationService, $timeout, $stateParams) {
  //Used to name the .html file
  $scope.template = TemplateService.changecontent("main");
  $scope.menutitle = NavigationService.makeactive("Home");
  TemplateService.title = $scope.menutitle;
  $scope.navigation = NavigationService.getnav();
  $scope.project=[];
  $scope.proj=function(){
     NavigationService.getprojects(function(data) {
      $scope.project = data;

      console.log($scope.project);

    //   var data2 = _.chunk(data, 6);
    //   console.log(data2);
    //
    //   $scope.mobile = data2;
});
   };
   $scope.remove = function(item) {
     $scope.project = item;
  var index = $scope.project.indexOf(item);
  $scope.project.splice(index, 1);
};
     //
    //  $scope.removeProj = function(item) {
    //    NavigationService.removeProject({
    //      id: item
    //    }, function(data) {
    //      console.log(data);
    //      if (data.value === true) {
    //        $scope.alerts.push({
    //          type: 'success',
    //          msg: 'Remove Project'
    //        });
    //        $scope.proj();
    //      }
     //
    //    });
    //  };
})


;
