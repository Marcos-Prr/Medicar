import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComponent } from './consulta/read/read.component';
import { AuthGuardService as AuthGuard} from './authenticate/authenticate-guard.service';

const routes: Routes = [
    {
        path:"consultas",
        component:ReadComponent,
        canActivate: [AuthGuard]

    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
