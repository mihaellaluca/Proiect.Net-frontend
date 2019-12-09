import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TehnologiiService {
	tehnologii: string[] = [
		'.net',
		'c#',
		'unity',
		'java',
		'javascript',
		'node.js',
		'angular',
		'react',
		'vue',
		'express',
		'swift',
		'mongoDb',
		'c++',
		'python',
		'c'
	];
	constructor() {}
	getTehnologies() {
		//GET request to server
		return this.tehnologii;
	}
}
