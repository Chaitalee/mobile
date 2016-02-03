//var adminurl = "http://wohlig.io:81/callApi/mobileApp/mobile/";
var adminurl = "http://wohlig.io:81/callApi/myApp/Project/";
var navigationservice = angular.module('navigationservice', [])

.factory('NavigationService', function($http) {
  var navigation = [{
    name: "Home",
    classis: "active",
    link: "#/home",
    subnav: [{
      name: "Subnav1",
      classis: "active",
      link: "#/home"
    }]
  }];

  return {
    getMobiles: function(callback) {
      $http.get(adminurl + 'getAll').success(callback);
    },
    getMobDetail: function (id,callback) {
    $http.get(adminurl + 'getMobile?id='+id).success(callback);
  },
  getprojects: function(callback) {
    $http.get(adminurl + 'getAll').success(callback);
  },
  //
  //
  // removeProject: function(cart,callback){
  //   console.log(cart);
  //   return $http({
  //     url: adminurl+"removeFromCart",
  //     method: "POST",
  //     data: {
  //       "cart": cart.id
  //     }
  //   }).success(callback);
  // },

    getnav: function() {
      return navigation;
    },
    makeactive: function(menuname) {
      for (var i = 0; i < navigation.length; i++) {
        if (navigation[i].name == menuname) {
          navigation[i].classis = "active";
        } else {
          navigation[i].classis = "";
        }
      }
      return menuname;
    },

  };
});
