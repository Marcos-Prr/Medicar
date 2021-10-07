import { Component, OnInit } from '@angular/core';
import { UserRegister } from '../user-register';
import { UserService } from '../user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: 'register.component.html',
  styleUrls: ['register.component.css']
})
export class RegisterComponent implements OnInit {

  hide = true;

  hidePassword():void{
    this.hide = !this.hide;
  }

  inputType(): string{
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
        first_name: new FormControl(this.userRegister.first_name,[Validators.required]),
        last_name: new FormControl(this.userRegister.last_name,[Validators.required]),
        email: new FormControl(this.userRegister.email,[Validators.required]),
        username: new FormControl(this.userRegister.username,[Validators.required]),
        password: new FormControl(this.userRegister.password,[Validators.required]),      
      }
    )
  
  redirectLogin():void{
    this.router.navigate(['/login']);
  }

  createAccount(){
    this.userService.create(this.userRegister).subscribe(
      response => {
        this.redirectLogin();
      }
    )
  }

  constructor(private router:Router,
    private userService:UserService) { }

  ngOnInit(): void {
  }

}
