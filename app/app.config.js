appConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

export default function appConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    // set default routes when no path specified
    $urlRouterProvider.when('', '/');
    // always goto 404 if route not found
    $urlRouterProvider.otherwise('/404');

    $locationProvider.html5Mode(false).hashPrefix('');
}