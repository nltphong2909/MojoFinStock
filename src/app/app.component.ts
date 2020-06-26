/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
// import { AnalyticsService } from './@core/utils/analytics.service';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  onSubmit(form: NgForm) {

  

    console.log(form.value);

    console.log(form.valid);

      

  }

  constructor(/*private analytics: AnalyticsService*/) {
  }

  ngOnInit() {
    // this.analytics.trackPageViews();
  }
}
