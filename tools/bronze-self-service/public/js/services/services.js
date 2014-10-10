/**
 * Created by eschmit on 10/8/2014.
 */
var app = angular.module('bronzeApp');

app
  .service('bronzeService', function() {
/*
    var data = {
      "chain-data":[{
        "chain-id":"7"
      }],
      "look-n-feel-data":[{
        "options":[{
          "name":"color",
          "value":"#123456",
          "active":true
        },{
          "name":"image url",
          "value":"http://",
          "active":false
        }]
      },{
        "name":"background-color",
        "value":"#123456"
      },{
        "name":"fonts",
        "value":"arial"
      },{
        "nav-bar-background-colors":[{
          "name":"unclicked",
          "value":"#123456"
        },{
          "name":"active",
          "value":"#123456"
        },{
          "name":"clicked",
          "value":"#123456"
        }]
      },{
        "nav-bar-text-colors":[{
          "name":"unclicked",
          "value":"#123456"
        },{
          "name":"active",
          "value":"#123456"
        },{
          "name":"clicked",
          "value":"#123456"
        }]
      },{
        "button-background-colors":[{
          "name":"unclicked",
          "value":"#123456"
        },{
          "name":"active",
          "value":"#123456"
        },{
          "name":"clicked",
          "value":"#123456"
        }]
      },{
        "button-text-colors":[{
          "name":"unclicked",
          "value":"#123456"
        },{
          "name":"active",
          "value":"#123456"
        },{
          "name":"clicked",
          "value":"#123456"
        }]
      }],
      "actions-data":[{
        "name":"Circular",
        "position":"1",
        "link":"/circular",
        "image-url":"empty"
      },{
        "name":"Registration",
        "position":"2",
        "link":"/registration",
        "image-url":"empty"
      },{
        "name":"Recipe of the Day",
        "position":"3",
        "link":"/recipes",
        "image-url":"empty"
      },{
        "name":"Coupons",
        "position":"4",
        "link":"/coupons",
        "image-url":"empty"
      }],
      "navigation-data":[{
        "name":"Weekly Ad",
        "url":"http://",
        "text":"empty"
      },{
        "name":"Recipe of the Day",
        "url":"http://",
        "text":"empty"
      },{
        "name":"Coupons",
        "url":"http://",
        "text":"empty",
        "sub-menu":[{
          "name":"In Store",
          "link":"/coupons/instore"
        },{
          "name":"Manufacturer",
          "link":"/coupons/mfctr"
        }]
      },{
        "name":"Departments",
        "url":"http://",
        "text":"empty",
        "sub-menu":[{
          "name":"In Store",
          "link":"/coupons/instore"
        },{
          "name":"Manufacturer",
          "link":"/coupons/mfctr"
        }]
      }],
      "footer-data":[{
        "name":"Contact Us",
        "position":"1",
        "link":"/contact",
        "image-url":"empty",
        "allow-delete":false
      },{
        "name":"Employment",
        "position":"2",
        "link":"/careers",
        "image-url":"empty",
        "allow-delete":true
      }]
    };
*/
    var data = {
      "chain-data":[{
        name:"chain-id",
        value:"7"
      }],
      "look-n-feel-data":[{
        "name":"logo-url",
        "value":"http://link-to-your-image"
      },{
        "name":"selected-font",
        "value":"Impact"
      },{
        "name":"background-color",
        "value":"#123456"
      },{
        "name":"navigation-font-color",
        "value":"#123456"
      },{
        "name":"nav-bar-background-color-unclicked",
        "value":"#123456"
      },{
        "name":"nav-bar-background-color-active",
        "value":"#123456"
      },{
        "name":"nav-bar-background-color-clicked",
        "value":"#123456"
      },{
        "name":"nav-bar-text-color-unclicked",
        "value":"#123456"
      },{
        "name":"nav-bar-text-color-active",
        "value":"#123456"
      },{
        "name":"nav-bar-text-color-clicked",
        "value":"#123456"
      },{
        "name":"button-background-color-unclicked",
        "value":"#123456"
      },{
        "name":"button-background-color-active",
        "value":"#123456"
      },{
        "name":"button-background-color-clicked",
        "value":"#123456"
      },{
        "name":"button-text-color-unclicked",
        "value":"#123456"
      },{
        "name":"button-text-color-active",
        "value":"#123456"
      },{
        "name":"button-text-color-clicked",
        "value":"#123456"
      }],
      "navigation-data":[{
        "name":"Weekly Ad",
        "url":"http://",
        "text":"empty"
      },{
        "name":"Recipe of the Day",
        "url":"http://",
        "text":"empty"
      },{
        "name":"Coupons",
        "url":"http://",
        "text":"empty",
        "sub-menu":[{
          "name":"In Store",
          "link":"/coupons/instore"
        },{
          "name":"Manufacturer",
          "link":"/coupons/mfctr"
        }]
      },{
        "name":"Departments",
        "url":"http://",
        "text":"empty",
        "sub-menu":[{
          "name":"In Store",
          "link":"/coupons/instore"
        },{
          "name":"Manufacturer",
          "link":"/coupons/mfctr"
        }]
      }],
      "footer-data":[{
        "name":"Contact Us",
        "position":"1",
        "link":"/contact",
        "url":"empty",
        "allow-delete":false
      },{
        "name":"Employment",
        "position":"2",
        "link":"/careers",
        "url":"empty",
        "allow-delete":true
      }],
      "actions-data":[{
        "name":"Circular",
        "position":"1",
        "link":"/circular",
        "url":"empty"
      },{
        "name":"Registration",
        "position":"2",
        "link":"/registration",
        "url":"empty"
      },{
        "name":"Recipe of the Day",
        "position":"3",
        "link":"/recipes",
        "url":"empty"
      },{
        "name":"Coupons",
        "position":"4",
        "link":"/coupons",
        "url":"empty"
      }]
    };

    this.get = function(){
      return data;
    }
  })
  .service('parser', function(){

    this.findRowIndex = function (array, key){

      var index = 0;

      for(var i = 0; i < array.length; i++){

        if(key === array[i].$$hashKey){

          index = i;
          break;
        }
      }

      return index;
    };

    this.parse = function(array, search){

      for(var key in array){
        if(array.hasOwnProperty(key)){
          var x = key;
        }
      }
      var propertyVal = 'undefined';

      if(array){

        for(var i = 0; i < array.length; i++){

          if(search === array[i].name){
            propertyVal = array[i].value;
            break;
          }
        }
      }

      return propertyVal;
    }
  });
