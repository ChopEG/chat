export default class LayoutDefaultController {
    static get $inject() {
        return ['$injector'];
    }

    constructor ($injector) {
        this.$state = $injector.get('$state');

        this.userName = localStorage.getItem('user_name');
    }
}