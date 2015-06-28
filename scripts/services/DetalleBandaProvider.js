/**
 * Created by yago on 15/6/15.
 */
angular
    .module("jeviteca")
    .service("DetalleBandaProvider", ["$http", "$q", "$filter", function($http, $q, $filter) {

        this.obtenerBanda = function(nombreBanda) {

            var defer = $q.defer();

            $http.get("data/bands.json")
                .then(function(datos) {

                    var banda = $filter("filter")(datos.data, {"name": nombreBanda})[0];
                    defer.resolve(banda);

                });

            return defer.promise;
        }

    }]);