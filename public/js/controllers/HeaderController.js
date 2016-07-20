angular.module("app").controller("HeaderController",
    function($scope, Notification, $http){
        // Expose view variables
        $scope.$state = null;
        $scope.authentication = {};
        $scope.authentication.user = null;
        $scope.notifications = {};
        $scope.newNotifications = {};
        $scope.news = 0;

        // Get the topbar menu
        $scope.menu = null; //Menus.getMenu('topbar');

        // Toggle the menu items
        $scope.isCollapsed = false;
        $scope.toggleCollapsibleMenu = function () {
            $scope.isCollapsed = !$scope.isCollapsed;
        };

        $scope.showRightMenu = function () {
            var classname = "init-header-hide",
                hidens = document.getElementsByClassName(classname);
            for( var i = (hidens.length - 1); i >= 0; i--){
                angular.element(hidens[i]).removeClass(classname);
            }
        };

        $scope.openMenu = function($mdOpenMenu, ev) {
            originatorEv = ev;
            $mdOpenMenu(ev);
        };

        $scope.formtName = function(name){

            var x = String(String(name).split(" ")[0]);
            return (x.length <= 10 ) ? x : x.substring(0,10);
        };

        // Collapsing the menu after navigation
        $scope.$on('$stateChangeSuccess', function () {
            $scope.isCollapsed = false;
        });

        /*if(user){
         $http.get('/notification-by-field/user/' + user._id)
         .success(function (data) {
         console.log(data);
         $scope.notifications = data;
         if(!data){
         $scope.notifications = [{
         message: "Você não possui novas notificações no momento.",
         sender: { name: ""},
         user: {},
         status: {},
         link: "",
         created : {}
         }]
         }
         else{
         $scope.newsNotifications = $scope.notifications.filter(function(){

         });
         $scope.news = $scope.newsNotifications.lenght;
         }
         })
         .error(function (statusText) {
         console.log("Não foi possível carregar as notificações");
         console.log(statusText);
         });
         }*/

        $scope.userIdentity = function(thisUser){
            if(typeof thisUser.useCode == 'undefined' || thisUser.useCode == false){
                return thisUser.name;
            }
            else{
                return thisUser.userCode;
            }
        };
    });


/**
 * Funções globais
 *
 * */

/* Encurtamento de chamdas */
function gId( el ){
    return document.getElementById( el );
}

function gClass( el ){
    return document.getElementsByClassName( el );
}

function gName( el ){
    return document.getElementsByName( el );
}

function gTagName( el ){
    return document.getElementsByTagName( el );
}

/* controle de teste e2e*/
var testeE2E;

function showNotification(notification) {
    if(testeE2E == null || testeE2E == false){
        return Notification(notification);
    }
}

/* formatações */
function dataAtualFormatada(){
    var data = new Date();
    var dia = data.getDate();
    if (dia.toString().length == 1)
        dia = "0"+dia;
    var mes = data.getMonth()+1;
    if (mes.toString().length == 1)
        mes = "0"+mes;
    var ano = data.getFullYear();
    return dia+"/"+mes+"/"+ano;
}

function showPass(cb, id) {
    var input = document.getElementById(id);
    if(cb.checked){
        input.type = "text";
    }
    else{
        input.type = "password";
    }
}

formatCode = function(code){
    var lenght = 4 - String(code).length;
    while(lenght > 0){
        code = "0" + code;
        lenght--;
    }
    return code + "AB";
};

function moneyFormat(value){
    value = String(value);
    if(value.lastIndexOf(".") < 0){
        value += ".00";
    }
    if(value.lastIndexOf(".") == (value.length - 2)){
        value += '0';
    }
    return value.replace(".", ",");
}


/* loader spinner
 * startSpinner(text) // para iniciar podendo passar o parametro text que é opcional
 * stopSpinner // para parar
 * */
var optsSpinner = {
    lines: 14 // The number of lines to draw
    , length: 14 // The length of each line
    , width: 10 // The line thickness
    , radius: 42 // The radius of the inner circle
    , scale: 0.1 // Scales overall size of the spinner
    , corners: 1 // Corner roundness (0..1)
    , color: '#1C373C' // #rgb or #rrggbb or array of colors
    , opacity: 0.5 // Opacity of the lines
    , rotate: 0 // The rotation offset
    , direction: 1 // 1: clockwise, -1: counterclockwise
    , speed: 1 // Rounds per second
    , trail: 60 // Afterglow percentage
    , fps: 20 // Frames per second when using setTimeout() as a fallback for CSS
    , zIndex: 2e9 // The z-index (defaults to 2000000000)
    , className: 'spinner' // The CSS class to assign to the spinner
    , top: '50%' // Top position relative to parent
    , left: '50%' // Left position relative to parent
    , shadow: false // Whether to render a shadow
    , hwaccel: false // Whether to use hardware acceleration
    , position: 'absolute' // Element positioning
};
var targetSpinner = gId('gspinner');
var gspinner;
var textSpinner = gClass('textSpinner')[0];

function startSpinner(text){
    targetSpinner.className = "gspinner";
    gspinner = new Spinner(optsSpinner).spin(targetSpinner);
    if(text){ textSpinner.innerHTML = text; }
}

function stopSpinner(){
    gspinner.stop();
    targetSpinner.className = "hiddenSpinner";
    textSpinner.innerHTML = "";
}

function setTextSpinner(text){
    textSpinner.innerHTML = text;
}