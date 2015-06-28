/**
 * Created by yago on 15/6/15.
 */
angular
    .module("jeviteca")
    .directive("filaGenero", ['ngDialog', function (ngDialog) {


        return {

            restrict: "A",
            templateUrl: "views/FilaGenero.html",
            replace: true,
            scope: {

                genero: "="

            },

            link: function(scope) {

                scope.abrirModal = function() {
                    ngDialog.open({
                        template: 'views/test.html',
                        className: 'ngdialog-theme-plain',
                    });
                }

            }
        };

    }]);