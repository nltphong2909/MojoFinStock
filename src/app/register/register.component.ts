import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { NbRegisterComponent, } from '@nebular/auth';
import { ParseService } from '../parse.service';
import { Router } from '@angular/router';
import * as Parse from 'parse';



@Component({
  selector: 'ngx-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent extends NbRegisterComponent implements OnInit {
  async register() {
    console.log(this.user);
    let user = new Parse.User();
    user.set("username", this.user.fullName);
    user.set("password", this.user.password);
    user.set("email", this.user.email);

    // // other fields can be set just like with Parse.Object
    // user.set("phone", "xxx-xxx-xxx");

    try {
      await user.signUp();
      alert("Create Successfull !!!");
      // Hooray! Let them use the app now.
    } catch (error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  }
  ngOnInit() {
    Parse.initialize("eb7fb0d3-5187-49f8");
    Parse.serverURL = 'http://192.168.1.51:1338/parse';
  }
}

