/**
 * Created by sobdemanda on 22/02/16.
 */
 (function(){
  'use strict';
angular.module("myMenu", [])
    .run(function ($templateCache) {
        $templateCache.put('js/directives/menu-toggle/menu-link.html',
            '<md-button ng-class="{\'{{section.icon}}\' : true}" \n' +
            '  ui-sref-active="active" ui-sref="{{section.state}}" ng-click="focusSection()">\n' +
            '  {{section | humanizeDoc}}\n' +
            '  <span class="md-visually-hidden "\n' +
            '    ng-if="isSelected()">\n' +
            '    current page\n' +
            '  </span>\n' +
            '</md-button>\n' +
            '');
    })
    .directive('menuLink', function () {
        return {
            scope: {
                section: '='
            },
            templateUrl: 'js/directives/menu-toggle/menu-link.html',
            link: function ($scope, $element) {
                var controller = $element.parent().controller();

                $scope.focusSection = function () {
                    // set flag to be used later when
                    // $locationChangeSuccess calls openPage()
                    controller.autoFocusContent = true;
                };
            }
        };
    });
})();
