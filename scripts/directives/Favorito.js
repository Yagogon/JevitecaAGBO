/**
 * Created by yago on 15/6/15.
 */
angular
    .module("jeviteca")
    .directive("favorito", ["FavoritoService", function (FavoritoService) {


        return {

            restrict: "EA",
            templateUrl: "views/Favorito.html",
            replace: true,
            scope: {

                idAlbum: "="

            },

            link: function (scope) {

                scope.esFavorito = function() {

                    var albumes = localStorage["albumes"];
                    var favorito = false;

                    if (scope.idAlbum) {

                        if (albumes) {

                            var parseAlbumes = JSON.parse(albumes);

                            favorito = parseAlbumes.indexOf(scope.idAlbum) != -1;
                        }
                    }

                    return favorito;

                    /*FavoritoService.esFavorito(scope.idAlbum);*/
                }

                scope.hacerFavorito = function () {
                    FavoritoService.hacerFavorito(scope.idAlbum);
                }

                scope.quitarFavorito = function() {

                    FavoritoService.quitarFavorito(scope.idAlbum);
                }

            }
        };

    }]);