angular.module("app", [
    'ngResource',
    'ui.router',
    'ui-notification',
    'ngSanitize',
    'ngAnimate',
    'ui.router',
    'ngAria',
    'ngMaterial',
    'ui.utils.masks'
])
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

            $urlRouterProvider.otherwise("/");

            $stateProvider
                .state('index', {
                    url: '/',

                    views: {

                        '@': {
                            templateUrl: "index/index.html",
                            controller: "IndexController"
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
    });;