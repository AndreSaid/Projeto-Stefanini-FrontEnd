(function(angular, undefined) {
    "use strict";

    angular.module("hackaton-stefanini", [
        "ngRoute",
       // "stefanini.filters",
        "ui.mask",
        "ngTable",
        // ATENÇÃO: ao adicionar uma biblioteca aqui, adicionar uma referência no arquivo karma.conf.js para realizar os testes automatizados
        // Se ocorrer algum erro, habilite o browser "chrome_without_security" para conseguir ver o erro
    ]);
    // angular.module('app', ['angular.viacep'])
    // .controller('ctrl', function ctrl($scope) {
    //   $scope.address = {
    //       cep: null,
    //       uf: null,
    //       localidade: null,
    //       bairro: null,
    //       logradouro: null,
    //       complemento: null,
    //       ibge: null,
          
    //   }
    // });
})(angular);