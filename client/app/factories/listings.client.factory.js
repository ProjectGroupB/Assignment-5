angular.module('listings').factory('Listings', ['$http', 
  function($http) {
    var methods = {
      getAll: function() {
        return $http.get('http://localhost:8080/api/listings');
      },

      create: function(listing) {
        return $http.post('http://localhost:8080/api/listings', listing);
      }, 

      read: function(id) {
        return $http.get('http://localhost:8080/api/listings/' + id);
      }, 

      update: function(id, listing) {
        return $http.put('http://localhost:8080/api/listings/' + id, listing);
      }, 

      delete: function(id) {
        return $http.delete('http://localhost:8080/api/listings/' + id);
      },
        /* I am thinking this might be a thing, but not sure yet
      edit: function(id){
          return $http.edit('http://localhost:8080/api/listings/' + id);
      }
      */
    };

    return methods;
  }
]);