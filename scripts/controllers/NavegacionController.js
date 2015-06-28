/**
 * Created by yago on 15/6/15.
 */
angular
    .module("jeviteca")
    .controller("NavegacionController", ["$scope", "$routeSegment", function($scope, $routeSegment){

        $scope.rutaEsAlbum = function() {

            return $routeSegment.startsWith("albumes");

        };

        $scope.rutaEsBanda = function() {

            return $routeSegment.startsWith("bandas");

        }

        $scope.rutaEsGenero = function() {

            return $routeSegment.startsWith("generos");

        }

    }]);