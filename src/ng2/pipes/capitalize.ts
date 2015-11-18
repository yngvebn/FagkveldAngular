import { Pipe } from 'angular2/angular2';

@Pipe({
	name: 'capitalize'
})
export class Capitalize{
	transform(value: string){
		return value[0].toUpperCase()+ value.substring(1)
	}
}