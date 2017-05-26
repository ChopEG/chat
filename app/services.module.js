import 'angular';

import MessageService from 'services/message.service';
import BotService from 'services/bot.service';

angular.module('app.services', [])
    .service('MessageService', MessageService)
    .service('BotService', BotService);