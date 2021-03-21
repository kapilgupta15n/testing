import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  getUser: any;
  loginFormData: FormGroup;
  submitted = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.loginService.getlogin().subscribe((user) => {
      this.getUser = user;
      console.log(this.getUser);
    });

    // Login Form
    this.loginFormData = this.fb.group({
      userid: ["", Validators.required],
      password: ["", [Validators.required, Validators.minLength(6)]],
    });
    //console.warn
  }

  onSubmit() {
    const userval = this.loginFormData.value;

    if (userval.userid  !== this.getUser.userId) {
      alert('Please fill the value');
    } else {
      this.router.navigate(['/home'])
    }
    // console.log(this.getUser.value);
    // console.log(this.loginFormData.value);
  }
}
