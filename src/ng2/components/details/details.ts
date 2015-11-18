import { Component, NgIf } from 'angular2/angular2';
import { RouteParams } from 'angular2/router';
import { PeopleService } from '../../peopleService/peopleService';
import { Capitalize } from '../../pipes/capitalize';

@Component({
	templateUrl: 'ng2/components/details/details.tpl.html',
	styleUrls: ['ng2/components/details/details.css'],
	directives: [NgIf],
	pipes: [Capitalize]
})
export class Details{
	person: any;
	constructor(peopleService: PeopleService, routeParams: RouteParams){
		peopleService.getPeople()
		.subscribe(res => {
			this.person = res.results.find(p => { return p.user.username === routeParams.params['username']; }).user;
		});
	}
}