// http://plnkr.co/edit/KNKe1PjhmgnMSPKsPvvC
angular.module("myMenu",[])
     .run(function ($templateCache) {
         $templateCache.put('js/directives/menu-toggle/menu-toggle.html',
             '<md-button class="md-button-toggle" ng-class="{\'toggled\' : isOpen()}"\n' +
             '  ng-click="toggle()"\n' +
             '  aria-controls="docs-menu-{{section.name | nospace}}"\n' +
             '  flex layout="row"\n' +
             '  aria-expanded="{{isOpen()}}">\n' +
             '  {{section.name}}\n' +
             '  <md-icon md-font-set="fa fa-chevron-down" class="md-toggle-icon" ng-class="{\'toggled\' : isOpen()}"></md-icon>' +
             '</md-button>\n' +
             '<ul ng-show="isOpen()" id="docs-menu-{{section.name | nospace}}" class="menu-toggle-list">\n' +
             '  <li ng-repeat="page in section.pages">\n' +
             '    <menu-link section="page"></menu-link>\n' +
             '  </li>\n' +
             '</ul>\n' +
             '');
     })
    .directive('menuToggle', function ( ) {
        return {
            scope: {
                section: '='
            },
            templateUrl: 'js/directives/menu-toggle/menu-toggle.html',
            link: function (scope, element) {
                var controller = element.parent().controller();

                scope.isOpen = function () {
                    return controller.isOpen(scope.section);
                };
                scope.toggle = function () {
                    controller.toggleOpen(scope.section);
                };

                var parentNode = element[0].parentNode.parentNode.parentNode;
                if (parentNode.classList.contains('parent-list-item')) {
                    var heading = parentNode.querySelector('h2');
                    element[0].firstChild.setAttribute('aria-describedby', heading.id);
                }
            }
        };
    });
