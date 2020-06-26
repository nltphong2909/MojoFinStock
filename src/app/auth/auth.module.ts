import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { 
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule
} from '@nebular/theme';
import { NgxLoginComponent } from "../login/login.component";
import { RegisterComponent } from "../register/register.component";
// import { NbRegisterComponent} from "../register/register.component";


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,
    ReactiveFormsModule,
    NbAuthModule,
  ],
  declarations: [
    NgxLoginComponent,
    RegisterComponent
    // NbRegisterComponent,
  ],
})
export class NgxAuthModule {
}