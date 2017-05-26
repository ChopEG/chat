import 'angular';

import MainConfig from './main.config';
import mainChatComponent from './chat/main-chat.component';
import mainLoginComponent from './login/main-login.component';
import mainLogoutComponent from './logout/main-logout.component';

angular.module('app.components.main', [])
    .config(MainConfig)
    .component('mainLoginComponent', mainLoginComponent)
    .component('mainChatComponent', mainChatComponent)
    .component('mainLogoutComponent', mainLogoutComponent);