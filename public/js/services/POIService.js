angular.module("app").factory('POI',
    function($resource) {

        return $resource('/poi/:id');
    });