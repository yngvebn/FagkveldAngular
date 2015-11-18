var angular2_1 = require('angular2/angular2');
var http_1 = require('angular2/http');
var router_1 = require('angular2/router');
var peopleService_1 = require('./peopleService/peopleService');
var app_1 = require('./app');
var universalInjectables = [
    http_1.HTTP_BINDINGS, http_1.HTTP_PROVIDERS,
    router_1.ROUTER_DIRECTIVES,
    router_1.ROUTER_PROVIDERS,
    peopleService_1.PeopleService];
angular2_1.bootstrap(app_1.App, [universalInjectables]);
