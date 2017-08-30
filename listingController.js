angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function() {
        var element = {
          "code" : $scope.code,
          "name" : $scope.name,
          "address" : $scope.address,
          "coordinates" : {
            "latitude" : $scope.latitude,
            "longitude" : $scope.longitude
          }
        };

        $scope.listings.push(element);
    };

    $scope.deleteListing = function(index) {
        $scope.listings.splice(index, 1);
    };

    $scope.showDetails = function(index) {
        var element = $scope.listings[index];
        $scope.detailedInfo = {
          "name" : "Name: " +element.name,
          "address" : "Address: " + element.address,
          "latitude" : "Latitude: " + element.coordinates.latitude,
          "longitude" : "Longitude: " + element.coordinates.longitude
        }

    };
  }
]);