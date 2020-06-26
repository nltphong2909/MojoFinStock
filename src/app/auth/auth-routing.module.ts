import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NbAuthComponent } from '@nebular/auth';
import { NgxLoginComponent } from "../login/login.component";
import { RegisterComponent } from '../register/register.component';
// import { AuthRoutingModule} from './auth.module';

export const routes: Routes =[
  {
    path: '',
    component: NbAuthComponent,
    children: [{
      path: 'login',
      component: NgxLoginComponent,
      
    },
    {
      path: 'register',
      component: RegisterComponent,
      
    }
  ]
  },
     
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  declarations: [ 
    // CommonModule, NgxAuthModule
  ],
})
export class NgxAuthRoutingModule { }
