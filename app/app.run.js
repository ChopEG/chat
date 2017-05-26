import _ from 'lodash';

appRun.$inject = ['$rootScope', '$transitions'];

export default function appRun($rootScope, $transitions) {
    $rootScope.isReady = false;

    $transitions.onStart({}, function (trans) {
        let access = _.get(trans.$to(), 'data.access', false);
        
        if (access) {
            /*Cancel going to the authenticated state and go back to landing*/
            if (access === '@' && !localStorage.getItem('user_name')) {
                return trans.router.stateService.target('login');
            }
        }
    });
}