/**
 * Created by yago on 15/6/15.
 */
angular
    .module("jeviteca")
    .controller("DetalleAlbumController", ["$scope", "Album", function ($scope, Album) {

        $scope.album = Album;

        $scope.obtenerUrlYoutube = function(bandName, trackName) {

            return "https://www.youtube.com/results?search_query=" + encodeURIComponent((Album.band.name + " " + trackName).toLowerCase());

        }


    }]);