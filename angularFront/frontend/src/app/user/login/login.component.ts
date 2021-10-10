import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { UserLogin } from '../user-login';
import { AuthService } from 'src/app/authenticate/authenticate.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private userService:UserService,
    private authService: AuthService,
    private router:Router) { }

  ngOnInit(): void {
  }

  hide = true;

  hidePassword():void{
    this.hide = !this.hide;
  }

  inputType(): string{
    return this.hide ? 'password' : 'text';
  }
  redirectConsultas():void{
    this.router.navigate(['/consultas']);
  }
  
  redirectRegistrar():void{
    this.router.navigate(['/registrar']);
  }

  login(){
    this.userService.login(this.userLogin).subscribe(
      response => {
        this.authService.setUserInfo(response);
        this.redirectConsultas();
      }
    )
  }

  public userLogin: UserLogin =
  {
    username:'',
    password:''
  }

}
