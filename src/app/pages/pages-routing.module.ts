import { RouterModule, Routes } from "@angular/router";
import { NgModule, Injectable } from "@angular/core";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { OverviewComponent } from "./market/overview/overview.component";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { ParseService } from "../parse.service";
import { HsxComponent } from "./market/hsx/hsx.component";
import { NewsComponent } from "./market/news/news.component";

interface CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree;
}

class Permissions {
  canActivate(user, router): boolean {
    if (user && user.authenticated()) {
      return true;
    } else {
      router.navigate(["/auth/login"]);
      return true;
    }
  }
}

@Injectable()
class CanActivateTeam implements CanActivate {
  constructor(
    private permissions: Permissions,
    private router: Router,
    private parseService: ParseService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    return this.permissions.canActivate(
      this.parseService.currentUser(),
      this.router
    );
  }
}

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
        canActivate: [CanActivateTeam]
      },
      {
        path: "overview",
        component: OverviewComponent,
        canActivate: [CanActivateTeam]
      },
      // {
      //   path: "market",
      //   component: TestComponent,
      //   canActivate: [CanActivateTeam]
      // },
      {
        path: "hsx",
        component: HsxComponent,
        canActivate: [CanActivateTeam]
      },

      {
        path: "news",
        component: NewsComponent,
        canActivate: [CanActivateTeam]
      },

      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [CanActivateTeam, Permissions]
})
export class PagesRoutingModule {}
