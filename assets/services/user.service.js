(function () {
    'use strict';

    window.app
        .service('UserService', UserService);

    UserService.$inject = ['$http', '$rootScope', '$cookies'];
    function UserService($http, $rootScope, $cookies) {
        this.login = login;
        this.logout = logout;

        /**
         * Login service.
         * @param {String} username - Username.
         * @param {String} password - Password.
         */
        async function login({ username, password }) {
            $rootScope.global['user'] = true; //change from post when service available
            // $http.defaults.headers.common = { token: $rootScope.global.user.token };
            let expires = new Date();
            expires.setDate(expires.getDate() + 7);
            $cookies.putObject('user', $rootScope.global.user, { expires });
            return $rootScope.global.user;
        }

        /**
         * Logout service.
         */
        function logout() {
            $http.defaults.headers.common = {};
            $rootScope.globals = {};
            $cookies.remove('user');
            $cookies.remove('menu');
        }
    }
})();