export default class MainChatController {
    static get $inject() {
        return ['$injector'];
    }

    constructor($injector) {
        this.messageService = $injector.get('MessageService');
        this.$timeout = $injector.get('$timeout');

        /**
         * start message sending
         */
        $injector.get('BotService').run();

        this.userName = localStorage.getItem('user_name');
        this.messages = this.messageService.messages;


    }

    /**
     * @see MessageService.send
     */
    onSendMessage() {
        if (!this.message) {
            return ;
        }

        this.messageService.send(this.userName, this.message);
        this.playSound();
        this.message = '';
    }

    /**
     * play sound after a message is sent
     */
    playSound(){
        angular.element('audio')[0].play();
    }

    /**
     * scroll down after a message is sent
     */
    toScroll() {
        this.$timeout(() => {
            angular.element('.messages-container').scrollTop(999999);
        });
    }
}