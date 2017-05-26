MainConfig.$inject = ['$stateProvider'];

export default function MainConfig($stateProvider) {

    $stateProvider
        .state('chat', {
            data: {
                access: '@'
            },
            parent: 'default',
            url: '/',
            views: {
                content: {
                    component: 'mainChatComponent'
                }
            }
        })
        .state('login', {
            data: {},
            url: '/login',
            parent: 'blank',
            views: {
                content: {
                    component: 'mainLoginComponent'
                }
            }
        })
        .state('logout', {
            url: '/logout',
            component: 'mainLogoutComponent'
        });
};
