import { bootstrap } from 'angular2/angular2';
import { HTTP_BINDINGS, HTTP_PROVIDERS} from 'angular2/http';
import { ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from 'angular2/router';
import {PeopleService } from './peopleService/peopleService';

import {App} from './app';

var universalInjectables = [
 HTTP_BINDINGS, HTTP_PROVIDERS,
 ROUTER_DIRECTIVES,
 ROUTER_PROVIDERS,
 PeopleService];

bootstrap(App, [universalInjectables]);