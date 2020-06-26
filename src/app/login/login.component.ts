import { Component, ChangeDetectorRef, OnInit } from '@angular/core';
import { NbLoginComponent, NbAuthService,} from '@nebular/auth';
import { ParseService } from '../parse.service';
import { Router } from '@angular/router';
import * as Parse from 'parse';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  // styleUrls: ['./login.component.scss']
 
})
export class NgxLoginComponent extends NbLoginComponent implements OnInit {
  async login() {
    try {
      const {email, password} = this.user;
      let user = await Parse.User.logIn(email, password);
      if (user && user.id) {
        this.router.navigate(["/"]);
      } else {
        alert("user not exist");
      }
    } catch {
      alert("user not exist");
    }
  }
 
  ngOnInit() {
    Parse.initialize("eb7fb0d3-5187-49f8");
    Parse.serverURL = 'http://192.168.1.51:1338/parse';
  }
}