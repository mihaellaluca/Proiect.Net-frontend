export class InvitationModel {
	ProjectId: string;
	CollaboratorId: string;
	OwnerId: string;
	InvitationType: number;
	constructor(ProjectId, CollaboratorId, OwnerId, InvitationType) {
		this.ProjectId = ProjectId;
		this.CollaboratorId = CollaboratorId;
		this.OwnerId = OwnerId;
		this.InvitationType = InvitationType;
	}
}
