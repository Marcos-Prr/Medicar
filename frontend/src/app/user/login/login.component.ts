import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserLogin } from '../user-login';
import { AuthService } from 'src/app/authenticate/authenticate.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  hide = true;

  hidePassword():void{
    this.hide = !this.hide;
  }

  inputType(): string{
    return this.hide ? 'password' : 'text';
  }

  login(){
    this.userService.login(this.userLogin).subscribe(
      response => {
        this.authService.setUserInfo(response)
      }
    )
  }

  public userLogin: UserLogin =
  {
    username:'',
    password:''
  }

}
