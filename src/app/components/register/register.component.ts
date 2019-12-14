import { Component, OnInit } from "@angular/core";
import { TehnologiiService } from "../../services/tehnologii.service";
import { TechItemModel } from "../../models/TechItemModel";
import { InitialService } from "../../services/initial.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  tech: string[];
  isValid: boolean = true;
  techKnown: string[] = [];
  registerForm: FormGroup;

  constructor(
    private techFromServer: TehnologiiService,
    private initial: InitialService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    document.body.classList.add("bg-img-sign");

    this.tech = this.techFromServer.getTehnologies();
    this.registerForm = this.formBuilder.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      username: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
      techKnown: [this.techKnown]
    });
    console.log("Form:::: ", this.registerForm);
  }

  manageTech(item: TechItemModel) {
    if (item.isChecked) this.techKnown.push(item.techItem);
    else this.techKnown = this.techKnown.filter(t => t !== item.techItem);
  }

  onSubmit() {
    if (this.registerForm.invalid) {
      console.log("Formularul nu respecta validarile");
      return;
    }
    this.initial
      .registerUser(this.registerForm.value)
      .pipe()
      .subscribe(
        data => {
          console.log("Data:::", data);
          this.router.navigate(["login"]);
        },
        error => {
          window.alert("Error occured on register.");
        }
      );
    // if (this.isValid) this.router.navigate(["login"]);
  }
}
