export default class MainLogoutController {

    static get $inject() {
        return ['$injector'];
    }

    constructor($injector) {
        this.toaster = $injector.get('toaster');
        this.$state = $injector.get('$state');
        this.messageService = $injector.get('MessageService');
        this.botService = $injector.get('BotService');
    }

    /**
     * @internal clear history message
     * @internal stop sending random message
     * @internal logout
     */
    $onInit() {
        this.messageService.messages = [];
        this.botService.stop();

        localStorage.removeItem('user_name');

        return this.$state.go('login');
    }

}