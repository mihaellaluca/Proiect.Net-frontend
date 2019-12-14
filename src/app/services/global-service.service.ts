import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class GlobalService {
	constructor() {}

	apiURL: string = 'https://localhost:5001/v1';
}
