/**
 * Created by yago on 23/6/15.
 */
angular
    .module("jeviteca")
    .service("FavoritoService", function () {

        this.esFavorito = function (id) {

            var albumes = localStorage["albumes"];
            var favorito = false;

            if (id) {

                if (albumes) {

                    var parseAlbumes = JSON.parse(albumes);

                    favorito = parseAlbumes.indexOf(id) != -1;
                }
            }

            return favorito;

        };

        this.hacerFavorito = function (id) {

            if (id) {

                var albumes = localStorage["albumes"];

                if (!albumes) {

                    albumes = [];

                } else {
                    albumes = JSON.parse(albumes);
                }

                if (albumes.indexOf(id) == -1) {
                    albumes.push(id)
                }

                localStorage.setItem("albumes", JSON.stringify(albumes));
            }

        };

        this.quitarFavorito = function (id) {

            if (id) {

                var albumes = localStorage["albumes"];

                albumes = JSON.parse(albumes);

                var index = albumes.indexOf(id)
                albumes.splice(index, 1);


                localStorage.setItem("albumes", JSON.stringify(albumes));
            }

        };

    });