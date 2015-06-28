/**
 * Created by yago on 15/6/15.
 */
angular
    .module("jeviteca")
    .controller("BandasController", ["$scope", "Bandas" , function($scope, Bandas){

        $scope.bandas = Bandas.data;


    }]);