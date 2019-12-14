import { Component, OnInit } from "@angular/core";
import { InitialService } from "../../services/initial.service";
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private initial: InitialService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit() {
    document.body.classList.add("bg-img-sign");

    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      console.log("Formularul nu respecta validarile.");
      return;
    }
    this.initial
      .loginUser(this.loginForm.value)
      .pipe()
      .subscribe(
        data => {
          console.log("Data::", data);
          this.router.navigate(["home"]);
        },
        error => {
          console.log("error body:", error.body);
          window.alert("Error occured on login.");
        }
      );
  }
}
