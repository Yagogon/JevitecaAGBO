/**
 * Created by yago on 15/6/15.
 */
angular
    .module("jeviteca", ["ngRoute", "route-segment", "view-segment", "ngDialog"]);


angular
    .module("jeviteca")
    .config(["$routeSegmentProvider", "$routeProvider", function($routeSegmentProvider, $routeProvider){

        $routeSegmentProvider.when("/albumes", "albumes");
        $routeSegmentProvider.when("/bandas", "bandas");
        $routeSegmentProvider.when("/generos", "generos");
        $routeSegmentProvider.when("/albumes/:id/detalle", "detalle_album");
        $routeSegmentProvider.when("/bandas/:id/detalle", "detalle_banda");


        $routeSegmentProvider.segment("albumes", {

            controller:"AlbumesController",
            templateUrl:"views/Albumes.html",

            resolve: {

                Albumes: ["JSONProvider", function(JSONProvider){

                    return JSONProvider.obtenerJSON("data/albums.json");

                }]

            }

        });

        $routeSegmentProvider.segment("bandas", {

            controller:"BandasController",
            templateUrl:"views/Bandas.html",

            resolve: {

                Bandas: ["JSONProvider", function(JSONProvider){

                    return JSONProvider.obtenerJSON("data/bands.json");

                }]

            }

        });

        $routeSegmentProvider.segment("generos", {

            controller:"GenerosController",
            templateUrl:"views/Generos.html",

            resolve: {

                Generos: ["JSONProvider", function(JSONProvider){

                    return JSONProvider.obtenerJSON("data/genres.json");

                }]

            }

        });

        $routeSegmentProvider.segment("detalle_album", {

            controller:"DetalleAlbumController",
            templateUrl:"views/DetalleAlbum.html",

            resolve: {

                Album: ["DetalleAlbumProvider", "$routeParams", function(DetalleAlbumProvider, $routeParams){

                    debugger;
                    return DetalleAlbumProvider.obtenerAlbum($routeParams.id);

                }]

            }

        });

        $routeSegmentProvider.segment("detalle_banda", {

            controller:"DetalleBandaController",
            templateUrl:"views/DetalleBanda.html",

            resolve: {

                Banda: ["DetalleBandaProvider", "$routeParams", function(DetalleBandaProvider, $routeParams){

                    debugger;
                    return DetalleBandaProvider.obtenerBanda($routeParams.id);

                }]

            }

        });

        $routeProvider.otherwise( {

            redirectTo:"/albumes"

        });

    }]);