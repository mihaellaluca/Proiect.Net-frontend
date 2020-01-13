export class HandleInvitationModel {
	ProjectId: string;
	CollaboratorId: string;
	OwnerId: string;
	Accepted: number;
	constructor(ProjectId, CollaboratorId, OwnerId, Accepted) {
		this.ProjectId = ProjectId;
		this.CollaboratorId = CollaboratorId;
		this.OwnerId = OwnerId;
		this.Accepted = Accepted;
	}
}
