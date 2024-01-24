import { CanActivateFn, Router } from '@angular/router';
import { Inject } from '@angular/core';
export const canActivateChildGuard: CanActivateFn = (route, state) => {
  let user = localStorage.getItem('contact');
  // const router  = Inject(Router);
  if(user =="false")
  {
    // router.navigate(['invalid']);
    // console.warn("Waaa")
    alert("No Access")
    return false;
  }
  else{
  return true
  }
};
