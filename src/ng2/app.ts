import { Component, NgFor} from 'angular2/angular2';
import {List} from './components/list/list';
import {Details} from './components/details/details';
import {RouteConfig, RouterOutlet} from 'angular2/router';

@Component({
	selector: 'main-app',
	template: '<router-outlet></router-outlet>',
	directives: [RouterOutlet]
})
@RouteConfig([
	{ path: '/', as :'List', component: List },
	{ path: '/details/:username', as :'Details', component: Details}
])
export class App{
	constructor(){
		
	}
}