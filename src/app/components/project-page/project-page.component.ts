import { Component, OnInit, Input } from "@angular/core";
import { Project } from "src/app/models/CreateProjectModel";
import { ProjectTabService } from "src/app/services/project-tab.service";

@Component({
  selector: "app-project-page",
  templateUrl: "./project-page.component.html",
  styleUrls: ["./project-page.component.scss"]
})
export class ProjectPageComponent implements OnInit {
  userId: string;
  projectId: string; // trebuie luat din linkul curent. /project-page/projectId
  project: Project;
  neededTech: string[] = [];

  constructor(private projectService: ProjectTabService) {}

  ngOnInit() {
    document.body.classList.add("bg-img-home");

    this.projectService.getProjectById(this.projectId).pipe().subscribe(
      (data) => {
        console.log(data);
        //this.project = data;
      },
      (error) => {
        console.log(error);
      }
    );
  


  }

  joinProject() {
    // add current user to project

  }

  checkUserIsOwner() {
    // if project owner then true, else false

  }

}
