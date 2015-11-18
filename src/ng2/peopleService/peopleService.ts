import {Injectable} from 'angular2/angular2';
import { Http, Response } from 'angular2/http';


@Injectable()
export class PeopleService{
	constructor(public http: Http){

	}

	public getPeople(): any{
		return this.http.get('http://api.randomuser.me/?results=20&seed=fagkveld&nat=us')
		.map((res:Response) => res.json());
	}
}
