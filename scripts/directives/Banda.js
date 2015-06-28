/**
 * Created by yago on 15/6/15.
 */
angular
    .module("jeviteca")
    .directive("filaBanda", function () {


        return {

            restrict: "A",
            templateUrl: "views/FilaBanda.html",
            replace: true,
            scope: {

                banda: "="

            },

            link: function() {

            }
        };

    });