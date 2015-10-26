angular.module('spaModule', [])
    .controller('mainCtrl', mainCtrl);

function mainCtrl($scope) {
    $scope.showMe = 'page2';

}

