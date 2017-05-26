import _ from 'lodash';
/**
 * MainLoginController class
 */
export default class MainLoginController {

    static get $inject() {
        return ['$injector'];
    }

    constructor($injector) {
        this.toaster = $injector.get('toaster');
        this.$state = $injector.get('$state');
        this.$sce = $injector.get('$sce');
        this.login = '';
        this.errors = {};
    }

    /**
     * submit form
     * @returns {*}
     */
    onSubmit() {
        if (!this.login) {
            return this.errors.login = this.$sce.trustAsHtml('<span style="color: red;">Invalid login</span>');
        }

        localStorage.setItem('user_name', this.login);
        
        return this.$state.go('chat');
    }
}