import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../user-register';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'src/app/toast/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
    private userService: UserService,
    private toast: ToastService) { }

  ngOnInit(): void {
  }


  hide = true;

  hidePassword(): void {
    this.hide = !this.hide;
  }

  inputType(): string {
    return this.hide ? 'password' : 'text';
  }

  userRegister: UserRegister =
    {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      username: ""
    };

  createForm = new FormGroup(
    {
      first_name: new FormControl(this.userRegister.first_name, [Validators.required]),
      last_name: new FormControl(this.userRegister.last_name, [Validators.required]),
      email: new FormControl(this.userRegister.email, [Validators.required]),
      username: new FormControl(this.userRegister.username, [Validators.required]),
      password: new FormControl(this.userRegister.password, [Validators.required]),
    }
  )

  redirectLogin(): void {
    this.router.navigate(['/login']);
  }

  createAccount() {
    this.userService.create(this.userRegister).subscribe(
      response => {
        this.toast.messageSuccess("Usuario Criado com Sucesso");
        this.redirectLogin();
      }
    )
  }


}
