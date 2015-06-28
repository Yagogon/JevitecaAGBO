/**
 * Created by yago on 15/6/15.
 */
angular
    .module("jeviteca")
    .service("JSONProvider", ["$http", function($http) {

        this.obtenerJSON = function(ruta) {

            return $http.get(ruta, {

                cache: true
            });
        }

    }]);