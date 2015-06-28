/**
 * Created by yago on 15/6/15.
 */
angular
    .module("jeviteca")
    .service("DetalleAlbumProvider", ["$http", "$q", "$filter", function($http, $q, $filter) {

        this.obtenerAlbum = function(idAlbum) {

            var defer = $q.defer();

            $http.get("data/albums.json")
                .then(function(datos) {

                    var album = $filter("filter")(datos.data, {"id": idAlbum})[0];
                    defer.resolve(album);

                });

            return defer.promise;
        }

    }]);