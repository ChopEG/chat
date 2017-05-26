import 'angular';
/**
 * class MessageService
 */
export default class MessageService {

    static get $inject() {
        return ['$injector'];
    }

    constructor($injector) {
        this.messages = [];
    }

    /**
     * send message
     *
     * @param user
     * @param message
     */
    send(user, message) {
        this.messages.push({
            message: message,
            user: user,
            date: new Date()
        });
    }
}
