angular.module('listings').factory('Listings', ['$http', 
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://23.21.203.159:8080/api/listings');
      },

      create: function(listing) {
        return $http.post('http://23.21.203.159:8080/api/listings', listing);
      }, 

      read: function(id) {
        return $http.get('http://23.21.203.159:8080/api/listings/' + id);
      }, 

      update: function(id, listing) {
        return $http.put('http://23.21.203.159:8080/api/listings/' + id, listing);
      }, 

      delete: function(id) {
        return $http.delete('http://23.21.203.159:8080/api/listings/' + id);
      }
    };

    return methods;
  }
]);