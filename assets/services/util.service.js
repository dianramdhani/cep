(function () {
    'use strict';

    window.app
        .service('UtilService', UtilService);

    UtilService.$inject = ['$rootScope', '$cookies'];
    function UtilService($rootScope, $cookies) {
        this.updateMenu = updateMenu;
        this.updateGlobal = updateGlobal;

        /**
         * Update menu for save last menu state.
         * @param {Array} menu - Last menu.
         */
        function updateMenu({ menu }) {
            $rootScope.global.menu = menu;
            let expires = new Date();
            expires.setDate(expires.getDate() + 7);
            $cookies.putObject('menu', $rootScope.global.menu, { expires });
        }

        function updateGlobal() {
            $rootScope['global'] = {
                user: angular.fromJson($cookies.get('user')),
                menu: angular.fromJson($cookies.get('menu'))
            } || {};
        }
    }
})();