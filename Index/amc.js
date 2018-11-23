var TestMod = angular.module('TestMod',[]);

TestMod.controller('tmController',['$scope','$http',function($scope,$http){
  $scope.test = "test";
  $scope.data= {};

  // store list of categories
  $scope.data.categories = ['cat1','cat2','cat3','cat4'];

  // this item is bound to user input and also used to show list of items based on the filter
  $scope.current_category = $scope.data.categories[0];

  // this object is bind to the modal input fields
  $scope.staging_item = {};

  // this object i temporary variable, intended to store items in products array
  $scope.current_edit_item ={};

  // set this to add if modal is open for adding new item and edit if modal is open for editing an existing item
  $scope.modal_mode = "none";

  // set this to true false to show hide modal
  $scope.show_modal = false;

  // utility function to copy a contents to b , where a is source object and b is destination object
  $scope.copyTo = function(a,b){
    var keys = Object.keys(a);
    if(keys && keys.length > 0){
      keys.forEach(function(e){
          b[e] = a[e];
      });
    }
  }



// store items list in data.products

    $scope.data.products = [
      {
        category : 'cat1',
        product : "prod one cat1",
        price : "3000",
        description  : " test desc one "
      },
      {
        category : 'cat1',
        product : "prod two cat1",
        price : "300",
        description  : " test desc two "

      },
      {
        category : 'cat1',
        product : "prod three cat1" ,
        price : "3009",
        description  : " test desc three "
      },
      {
        category : 'cat1',
        product : "prod four cat1",
        price : "4000",
        description  : " test desc four "
      },
      {
        category : 'cat2',
        product : "prod one cat2",
        price : "3000",
        description  : " test desc one "
      },
      {
        category : 'cat2',
        product : "prod two cat2",
        price : "300",
        description  : " test desc two "

      },
      {
        category : 'cat2',
        product : "prod three cat2" ,
        price : "3009",
        description  : " test desc three "
      },
      {
        category : 'cat2',
        product : "prod four cat2",
        price : "4000",
        description  : " test desc four "
      },
      {
        category : 'cat3',
        product : "prod one cat3",
        price : "3000",
        description  : " test desc one "
      },
      {
        category : 'cat3',
        product : "prod two cat3",
        price : "300",
        description  : " test desc two "

      },
      {
        category : 'cat3',
        product : "prod three cat3" ,
        price : "3009",
        description  : " test desc three "
      },
      {
        category : 'cat3',
        product : "prod four cat3",
        price : "4000",
        description  : " test desc four "
      },
      {
        category : 'cat4',
        product : "prod one cat4",
        price : "3000",
        description  : " test desc one "
      },
      {
        category : 'cat4',
        product : "prod two cat4",
        price : "300",
        description  : " test desc two "

      },
      {
        category : 'cat4',
        product : "prod three cat4" ,
        price : "3009",
        description  : " test desc three "
      },
      {
        category : 'cat4',
        product : "prod four cat4",
        price : "4000",
        description  : " test desc four "
      }
    ];



  /*
  $scope.data.products = {
  cat1 :
   [
      {
        category : 'cat1',
        product : "prod one cat1",
        price : "3000",
        description  : " test desc one "
      },
      {
        category : 'cat1',
        product : "prod two cat1",
        price : "300",
        description  : " test desc two "

      },
      {
        category : 'cat1',
        product : "prod three cat1" ,
        price : "3009",
        description  : " test desc three "
      },
      {
        category : 'cat1',
        product : "prod four cat1",
        price : "4000",
        description  : " test desc four "
      }
    ],
  cat2 :
    [
      {
        category : 'cat2',
        product : "prod one cat2",
        price : "3000",
        description  : " test desc one "
      },
      {
        category : 'cat2',
        product : "prod two cat2",
        price : "300",
        description  : " test desc two "

      },
      {
        category : 'cat2',
        product : "prod three cat2" ,
        price : "3009",
        description  : " test desc three "
      },
      {
        category : 'cat2',
        product : "prod four cat2",
        price : "4000",
        description  : " test desc four "
      }
    ],
    cat3 :
    [
      {
        category : 'cat3',
        product : "prod one cat3",
        price : "3000",
        description  : " test desc one "
      },
      {
        category : 'cat3',
        product : "prod two cat3",
        price : "300",
        description  : " test desc two "

      },
      {
        category : 'cat3',
        product : "prod three cat3" ,
        price : "3009",
        description  : " test desc three "
      },
      {
        category : 'cat3',
        product : "prod four cat3",
        price : "4000",
        description  : " test desc four "
      }
    ],
    cat4 :
    [
      {
        category : 'cat4',
        product : "prod one cat4",
        price : "3000",
        description  : " test desc one "
      },
      {
        category : 'cat4',
        product : "prod two cat4",
        price : "300",
        description  : " test desc two "

      },
      {
        category : 'cat4',
        product : "prod three cat4" ,
        price : "3009",
        description  : " test desc three "
      },
      {
        category : 'cat4',
        product : "prod four cat4",
        price : "4000",
        description  : " test desc four "
      }
    ]
  };
  */
// list of table heading fields
  $scope.data.product_fields = ['product','price','description'];

  $scope.edit_product  = function(item){
    $scope.modal_mode = "edit";

    $scope.staging_item  = {};
    $scope.copyTo(item,$scope.staging_item);
    $scope.current_edit_item = item;
    $scope.show_modal = true;
    //$("#myModal").modal('show');
  }
  $scope.edit_product_save = function(){
    $scope.copyTo($scope.staging_item , $scope.current_edit_item);

    $scope.current_edit_item = {};
    $scope.staging_item = {};
    $scope.modal_mode = "";
    $scope.show_modal = false;

  }
  $scope.edit_product_cancel = function(){
    $scope.current_edit_item = {};
    $scope.staging_item = {};
    $scope.modal_mode = "";
    //$("#myModal").modal("close");
    $scope.show_modal = false;
  }

  $scope.addNewProduct = function(){
      $scope.modal_mode = "add";
      console.log($scope.modal_mode);

      $scope.show_modal = true;
      $scope.staging_item = {
        product : "",
        category : "cat1",
        price : "",
        description : ""
      };
    //  $("#myModal").modal('show');
  }
  $scope.saveNewProduct = function(){
    //$("#myModal").modal('close');
    console.log($scope.data.products[$scope.staging_item.category]);
    $scope.data.products.push($scope.staging_item);
    $scope.staging_item = {};
    $scope.modal_mode = "";
    $scope.show_modal = false;
    //$("#myModal").modal('close');
  }




}]);
