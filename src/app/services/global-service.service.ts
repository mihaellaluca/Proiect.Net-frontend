import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GlobalService {
	constructor() {}

	apiURL: string = 'http://localhost:5000/v1';
	apiURLP: string = 'http://localhost:5500/v1';
}
