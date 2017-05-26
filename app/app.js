import './bootstrap';
import 'angular';
import '@uirouter/angularjs';
import 'restangular';
import 'angularjs-toaster';

import 'services.module';
import 'components/components.module';

import appRun from 'app.run';
import appConfig from 'app.config';

angular
    .module(
        'app',
        [
            'ui.router',
            'restangular',
            'toaster',
            
            'app.components',
            'app.services'
        ]
    )
    .config(appConfig)
    .run(appRun);