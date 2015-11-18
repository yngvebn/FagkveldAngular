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
var router_1 = require('angular2/router');
var peopleService_1 = require('../../peopleService/peopleService');
var capitalize_1 = require('../../pipes/capitalize');
var Details = (function () {
    function Details(peopleService, routeParams) {
        var _this = this;
        peopleService.getPeople()
            .subscribe(function (res) {
            _this.person = res.results.find(function (p) { return p.user.username === routeParams.params['username']; }).user;
        });
    }
    Details = __decorate([
        angular2_1.Component({
            templateUrl: 'ng2/components/details/details.tpl.html',
            styleUrls: ['ng2/components/details/details.css'],
            directives: [angular2_1.NgIf],
            pipes: [capitalize_1.Capitalize]
        }), 
        __metadata('design:paramtypes', [peopleService_1.PeopleService, router_1.RouteParams])
    ], Details);
    return Details;
})();
exports.Details = Details;
