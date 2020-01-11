export class Project {
	projectId: string;
	name: string;
	ownerId: string;
	ownerName: string;
	description: string;
	technologies: string[];
	state: string;

	constructor() {
		this.name = null;
		this.ownerId = null;
		this.ownerName = null;
		this.description = null;
		this.technologies = [];
		this.state = null;
	}
}
