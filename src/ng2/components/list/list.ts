import { Component, NgFor} from 'angular2/angular2';
import {Person} from '../person/person';
import {PeopleService} from '../../peopleService/peopleService';
import {Response} from 'angular2/http';
import {Router} from 'angular2/router';

@Component({
	templateUrl: '/ng2/components/list/list.tpl.html',
	styleUrls: ['/ng2/components/list/list'],
	directives: [NgFor, Person]
})
export class List{
	people: any = [];
	constructor(peopleService: PeopleService, public router: Router){
		peopleService.getPeople()			
			.subscribe(list => {
 				this.people = list.results;
 			});
	}

	public selectPerson(person){
		this.router.navigate(['/Details', {username: person.username}]);
	}
}