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
var capitalize_1 = require('../../pipes/capitalize');
var Person = (function () {
    function Person() {
        this.onSelect = new angular2_1.EventEmitter();
    }
    __decorate([
        angular2_1.Input(), 
        __metadata('design:type', Object)
    ], Person.prototype, "person");
    __decorate([
        angular2_1.Output(), 
        __metadata('design:type', Object)
    ], Person.prototype, "onSelect");
    Person = __decorate([
        angular2_1.Component({
            templateUrl: 'ng2/components/person/person.tpl.html',
            selector: 'person',
            styleUrls: ['ng2/components/person/person.css'],
            pipes: [capitalize_1.Capitalize]
        }), 
        __metadata('design:paramtypes', [])
    ], Person);
    return Person;
})();
exports.Person = Person;
