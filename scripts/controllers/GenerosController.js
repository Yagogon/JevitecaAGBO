/**
 * Created by yago on 15/6/15.
 */
angular
    .module("jeviteca")
    .controller("GenerosController", ["$scope", "Generos", function ($scope, Generos) {

        $scope.generos = Generos.data;


    }]);