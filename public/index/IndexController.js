angular.module("app").controller("IndexController",
    function($scope, $stateParams, $http, POI, Notification, $mdDialog, $mdMedia, anchorSmoothScroll){

        $scope.showPOIs = false;
        $scope.poi = new POI();
        $scope.pois = null;

        $scope.savePOI = function () {
            $scope.poi.$save()
                .then(function() {
                    // limpa o formulário
                    $scope.poi = new POI();
                    $scope.message = {text: 'Salvo com sucesso'};

                    Notification({message:"POI salvo com sucesso"});
                })
                .catch(function(erro) {
                    Notification({message: 'Não foi possível salvar o POI'});
                    //console.log(erro);
                });
        };
        
        $scope.displayPOIs = function () {

            POI.query(
                function(list) {
                    $scope.objects = list;
                    $scope.showPOIs = true;
                },
                function(erro) {
                    Notification({message:'Não foi possível obter a lista de POI\'s' });
                    //console.log(erro);
                }
            );
        };

        $scope.hidePOIs = function () {
            $scope.showPOIs = false;
        };
        
        $scope.testeServ3 = function () {
            $scope.search.x = 20;
            $scope.search.y = 10;
            $scope.search.max = 10;
            $scope.searchPOI();
        };
        
        $scope.searchPOI = function () {
            $http.post("/search-poi", $scope.search)
                .success(function (data) {
                    $scope.pois = data;
                })
                .error(function (statusText) {
                    //console.log(statusText);
                });
        };

    });
