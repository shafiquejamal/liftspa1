angular.module('spaModule', [])
    .controller('mainCtrl', mainCtrl);

function mainCtrl($scope) {
    setView('page1View');
    $scope.page1 = page1setView;
    $scope.page2 = page2setView;
    $scope.page3 = page3setView;
    $scope.login = loginSetView;
    $scope.register = registerSetView;

    function setView(view) {
        $scope.view = view;
    }

    function page1setView() {
        setView('page1View');
    }

    function page2setView() {
        setView('page2View');
    }

    function page3setView() {
        setView('page3View');
    }

    function loginSetView() {
        setView('loginView');
    }

    function registerSetView() {
        setView('registerView');
    }

}

