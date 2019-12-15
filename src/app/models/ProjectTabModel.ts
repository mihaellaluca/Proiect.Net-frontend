export class ProjectTabModel {
	id: string;
	projectName: string;
	ownerName: string;
	description: string;
	techVector: string[];
	constructor(id, projectName, ownerName, description, techVector) {
		this.id = id;
		this.projectName = projectName;
		this.ownerName = ownerName;
		this.description = description;
		this.techVector = techVector;
	}
}
