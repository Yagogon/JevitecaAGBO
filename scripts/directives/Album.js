/**
 * Created by yago on 15/6/15.
 */
angular
    .module("jeviteca")
    .directive("filaAlbum", function () {


        return {

            restrict: "A",
            templateUrl: "views/FilaAlbum.html",
            replace: true,
            scope: {

                album: "="

            },

            link: function(scope) {

            }
        };

    });
