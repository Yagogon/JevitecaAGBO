/**
 * Created by yago on 15/6/15.
 */
angular
    .module("jeviteca")
    .controller("DetalleBandaController", ["$scope", "Banda" , function($scope, Banda){

        $scope.banda = Banda;

        $scope.obtenerWikipediaLink = function(bandName) {

            return "https://es.wikipedia.org/wiki/Special:Search?search=" + encodeURIComponent(bandName);

        }

        $scope.recuperarIconoInstrumento = function(instrument) {

            var rutaIcono = "data/icons/";

            switch (instrument) {

                case "Guitarra": return rutaIcono + "guitar.png";
                case "Voz": return rutaIcono + "voz.png";
                case "Percusión":
                case "Batería": return rutaIcono + "bateria.png";
                case "Bajo": return rutaIcono + "bajo.jpg";
                default: return rutaIcono + "guitar.png";
            }

        }



    }]);