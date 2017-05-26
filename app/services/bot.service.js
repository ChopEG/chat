import 'angular';
import _ from 'lodash';

/**
 * class BotService
 */
export default class BotService {
    static get interval() {
        return 5000;
    }

    static get $inject() {
        return ['$injector'];
    }

    constructor($injector) {
        /**
         * Injector
         */
        this.messageService = $injector.get('MessageService');
        this.$http = $injector.get('$http');
        this.$interval = $injector.get('$interval');

        this.timer = undefined;
    }

    /**
     * start sending messages
     */
    run() {
        const self = this;

        self.$http({
            method: 'GET',
            url: '/messages.json'
        })
            .then(function successCallback(response) {
                self.messages = response.data;
                return self.sendRandomMessage();
            })
            .catch(console.log);
    }

    /**
     * stop sending messages
     */
    stop() {
        clearInterval(this.timer);
    }

    /**
     * send random message using set interval
     */
    sendRandomMessage() {
        this.timer = this.$interval(() => {
            let randomMessage = this.getRandomMessage();
            
            if (randomMessage && randomMessage.user && randomMessage.message) {
                this.messageService.send(randomMessage.user, randomMessage.message);
            }
        }, BotService.interval);
    }

    /**
     * get random message
     */
    getRandomMessage() {
        return this.messages[_.random(0, this.messages.length)];
    }
}