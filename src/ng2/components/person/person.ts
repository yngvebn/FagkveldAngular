import { Component, Input, Output, EventEmitter } from 'angular2/angular2';
import {Capitalize} from '../../pipes/capitalize';

@Component({
	templateUrl: 'ng2/components/person/person.tpl.html',
	selector: 'person',
	styleUrls: ['ng2/components/person/person.css'],
	pipes : [Capitalize]
})
export class Person{
	@Input() person: any;
	@Output() onSelect = new EventEmitter();

 	constructor(){
 		
	}


}