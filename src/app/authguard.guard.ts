import { CanActivateFn } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { inject } from '@angular/core';


export const authguardGuard: CanActivateFn = (route, state) => {

  const authService = inject(AuthService);


  var router = new Router;

  console.log(route)
  console.log(authService.isLoggedIn)
  if(route.url[0].path == "main"){
      if(authService.isLoggedIn == true) {
        return true;
      }else {
        router.navigate(["/login"]);
        return false;
      }
  }
  return true;
};
