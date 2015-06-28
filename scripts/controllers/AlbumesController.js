/**
 * Created by yago on 15/6/15.
 */
angular
    .module("jeviteca")
    .controller("AlbumesController", ["$scope", "Albumes", function($scope, Albumes){

        $scope.albumes = Albumes.data;

        $scope.query = "";

    }]);