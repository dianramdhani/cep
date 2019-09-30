require('./login.css');

(function () {
    'use strict';

    // Usage:
    // Login form.

    window.app
        .component('login', {
            template: require('./login.html'),
            controller: _
        });

    _.$inject = ['$scope', '$state', 'UserService'];
    function _($scope, $state, UserService) {
        let $ctrl = this;
        $ctrl.$onInit = () => { };

        $scope.login = async () => {
            await UserService.login({ username: $scope.username, password: $scope.password });
            $state.go('user');
        };
    }
})();