var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var list_1 = require('./components/list/list');
var details_1 = require('./components/details/details');
var router_1 = require('angular2/router');
var App = (function () {
    function App() {
    }
    App = __decorate([
        angular2_1.Component({
            selector: 'main-app',
            template: '<router-outlet></router-outlet>',
            directives: [router_1.RouterOutlet]
        }),
        router_1.RouteConfig([
            { path: '/', as: 'List', component: list_1.List },
            { path: '/details/:username', as: 'Details', component: details_1.Details }
        ]), 
        __metadata('design:paramtypes', [])
    ], App);
    return App;
})();
exports.App = App;
