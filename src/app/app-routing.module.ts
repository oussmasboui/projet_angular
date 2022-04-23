import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginUserComponent } from './login-user/login-user.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { TravelComponent } from './travel/travel.component';



const routes: Routes = [
  {path:"home",component:HomeComponentComponent},


{path:"admin",component:AdminComponent},
{path:"admin/dashboard",component:DashboardComponent},
{path:"login",component:LoginUserComponent},
{path:"travel",component:TravelComponent}


];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
