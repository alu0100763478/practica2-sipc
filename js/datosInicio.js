var misDatos = angular.module("datosApp", []);

misDatos.controller('ControladordeUsuarios', ['$scope', function($scope) {
  $scope.usuario = [{}];


  $scope.registrar = function() {
    $scope.usuarios.push( {email: $scope.usuario.email, nombre: $scope.usuario.nombre, apellido: $scope.usuario.apellido});
  };

}]);




/*misDatos.controller('controladorDatos', function( $scope, $http){

    $scope.importar = function(){

      $http.get('coches.json').success(function(datos){

          $scope.equipo = datos;

      });
    }

  $scope.importar();

});*/
