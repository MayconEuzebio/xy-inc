angular.module("app", [
    "ngRoute",
    'ngAnimate',
    'ui.router',
    'ngAria',
    'ui-notification',
    'ngSanitize',
    'ngMaterial',
    'ngResource'
])
    .config(function($routeProvider) {
    });


    /*
    .config(function ($mdThemingProvider) {
          $mdThemingProvider.theme('default')
            .primaryPalette('light-blue', {
              'default': '300'
            })
            .accentPalette('indigo', {
              'default': '500'
            });
        })
    .config(
    function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/demandas-disponiveis");

        $stateProvider
            .state('demandasdisponiveis', {
                url: '/demandas-disponiveis',

                views: {

                    '@': {
                        templateUrl: 'demands/demands.html',
                        controller: 'DemandsController'
                    }
                }
            })


    })
    //take all whitespace out of string
    .filter('nospace', function () {
        return function (value) {
            return (!value) ? '' : value.replace(/ /g, '');
        };
    })
    //replace uppercase to regular case
    .filter('humanizeDoc', function () {
        return function (doc) {
            if (!doc) return;
            if (doc.type === 'directive') {
                return doc.name.replace(/([A-Z])/g, function ($1) {
                    return '-' + $1.toLowerCase();
                });
            }

            return doc.label || doc.name;
        };
    });

    */
