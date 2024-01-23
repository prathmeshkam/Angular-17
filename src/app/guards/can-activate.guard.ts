import { CanActivateFn } from '@angular/router';

export const canActivateGuard: CanActivateFn = (route, state) => {
  let user = localStorage.getItem('contact');
  if(user =="false")
  {
    alert("No Acess");
    return false;
  }
  else{
  return true
  }
};
