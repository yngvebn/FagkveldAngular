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
var person_1 = require('../person/person');
var peopleService_1 = require('../../peopleService/peopleService');
var router_1 = require('angular2/router');
var List = (function () {
    function List(peopleService, router) {
        var _this = this;
        this.router = router;
        this.people = [];
        peopleService.getPeople()
            .subscribe(function (list) {
            _this.people = list.results;
        });
    }
    List.prototype.selectPerson = function (person) {
        this.router.navigate(['/Details', { username: person.username }]);
    };
    List = __decorate([
        angular2_1.Component({
            templateUrl: '/ng2/components/list/list.tpl.html',
            styleUrls: ['/ng2/components/list/list'],
            directives: [angular2_1.NgFor, person_1.Person]
        }), 
        __metadata('design:paramtypes', [peopleService_1.PeopleService, router_1.Router])
    ], List);
    return List;
})();
exports.List = List;
