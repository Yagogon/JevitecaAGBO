/**
 * Created by yago on 25/6/15.
 */

angular
    .module("jeviteca")
    .directive("filaGenero", function () {


        return {

            restrict: "A",
            templateUrl: "views/Valoracion.html",
            replace: true,
            scope: {

                valoracion: "="

            },

            link: function(scope) {


                scope.sumarValoracion = function(valoracion) {




                }


            }
        };

    });