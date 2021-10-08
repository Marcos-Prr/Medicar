import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './consulta/read/read.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { AuthGuardService as AuthGuard } from './authenticate/authenticate-guard.service';

const routes: Routes = [
    
    { path: "", redirectTo: "login", pathMatch: "full" },
    {
        path: "consultas",
        component: ReadComponent,
        canActivate: [AuthGuard]

    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "registrar",
        component: RegisterComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
