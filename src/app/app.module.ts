/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule, Injectable } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { CoreModule } from "./@core/core.module";
import { ThemeModule } from "./@theme/theme.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { AgGridModule } from "ag-grid-angular";
import {
  NbPasswordAuthStrategy,
  NbAuthModule,
  NbRegisterComponent
} from "@nebular/auth";
import {
  NbChatModule,
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbToastrModule,
  NbWindowModule
} from "@nebular/theme";

// import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

// import { DashboardModule } from './pages/dashboard/dashboard.module';
// import { AuthComponent } from '../auth/auth.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AgGridModule.withComponents([]),
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // RegisterComponent,
    // NgxLoginComponent,
    AppRoutingModule,
    ReactiveFormsModule,
    // DashboardModule,

    ThemeModule.forRoot(),

    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: "AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY"
    }),
    CoreModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: "email",
          baseEndpoint: "http://192.168.1.51:1338/parse",
          login: {
            endpoint: "/auth/sign-in",
            method: "post"
          },
          register: {
            endpoint: "/auth/sign-up",
            method: "post"
          },
          logout: {
            endpoint: "/auth/sign-out",
            method: "post"
          },
          requestPass: {
            endpoint: "/auth/request-pass",
            method: "post"
          },
          resetPass: {
            endpoint: "/auth/reset-pass",
            method: "post"
          }
        })
      ],
      forms: {}
    })
  ],
  exports: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
