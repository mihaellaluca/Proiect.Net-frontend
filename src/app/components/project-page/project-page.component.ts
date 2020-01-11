import { Component, OnInit, Input } from "@angular/core";
import { Project } from "src/app/models/CreateProjectModel";
import { ProjectTabService } from "src/app/services/project-tab.service";
import { UserService } from "src/app/services/user-service.service";

@Component({
  selector: "app-project-page",
  templateUrl: "./project-page.component.html",
  styleUrls: ["./project-page.component.scss"]
})
export class ProjectPageComponent implements OnInit {
  userId: string = localStorage.getItem("userId");
  projectId: string = "28dfa19a-8f77-463d-99d5-ee5602560dd7"; // trebuie luat din linkul curent. /project-page/projectId
  project: Project = new Project();
  neededTech: string[] = [];
  userIsOwner: boolean = false;
  collaborators: string[] = [];
  constructor(
    private projectService: ProjectTabService,
    private userService: UserService
  ) {}

  ngOnInit() {
    document.body.classList.add("bg-img-home");
    var ownerNameReq;

    this.userService
      .getUserById(this.userId)
      .pipe()
      .subscribe(
        data => {
          ownerNameReq = data["firstName"] + " " + data["lastName"];
        },
        error => {
          console.log(error);
        }
      );

    this.projectService
      .getProjectById(this.projectId)
      .pipe()
      .subscribe(
        data => {
          console.log("Project: ", data);

          for (var index in data[0].collaboratorsId) {
            this.userService.getUserById(data[0].collaboratorsId[index]).pipe().subscribe(
              data => {
                this.collaborators.push(data['firstName']+ " " +data['lastName']);
              },
              error => {
                console.log(error);
              }
            );
            
          }
          console.log("Colaboratori: ", this.collaborators);
            this.project = {
              projectId: data[0].id,
              name: data[0].name,
              ownerId: data[0].ownerId,
              ownerName: ownerNameReq,
              description: data[0].description,
              technologies: data[0].technologies,
              state: data[0].state
            };
            this.checkUserIsOwner();
        },
        error => {
          console.log(error);
        }
      );

      
    
  }

  joinProject() {
    // add current user to project
  }

  checkUserIsOwner() {
    if (this.userId === this.project.ownerId) {
      this.userIsOwner = true;
    } else {
      this.userIsOwner = false;
    }
    console.log("User owned::: ", this.userIsOwner, this.userId, " === ", this.project.ownerId);
  }
}
