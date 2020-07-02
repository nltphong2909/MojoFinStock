import { Injectable } from "@angular/core";
import * as Parse from "parse";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from "@angular/router";

class UserToken {}
class Permissions {
  canActivate(user: UserToken, id: string): boolean {
    return true;
  }
}

@Injectable({
  providedIn: "root"
})
export class ParseService {
  constructor() {
    Parse.initialize("eb7fb0d3-5187-49f8");
    Parse.serverURL = "http://192.168.1.51:1338/parse";
  }

  //  create(){
  //   let TestData = Parse.Object.extend("TestData");
  //   let testData = new TestData();
  //   testData.set("eMail", "phong@gmail.com");
  //   testData.set("passWord", 12345);
  //   testData.save()
  //   .then((testData) =>{
  //     alert('Create successfull: ' + testData.id);
  //   }, (error) =>{
  //     alert('Failed to create: ' + error.message);
  //   });

  // }
  async testData() {
    let TestData = Parse.Object.extend("TestData");
    let query = new Parse.Query(TestData);
    return await query.find();
  }

  async getNews(skip = 0, limit = 0) {
    let News = Parse.Object.extend("News");
    let query = new Parse.Query(News);
    if (skip) {
      query.skip(skip);
    }
    if (limit) {
      query.limit(limit);
    }
    return await query.find();
  }

  async getMI() {
    let MI = Parse.Object.extend("MI");
    let query = new Parse.Query(MI);
    query.ascending("tradingTime");
    query.limit(100000);
    return await query.find();
  }
  currentUser() {
    return Parse.User.current();
  }

  async logOut() {
    return await Parse.User.logOut();
  }
}
