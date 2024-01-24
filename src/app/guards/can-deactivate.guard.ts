import { CanActivateFn } from '@angular/router';

export const canDeactivateGuard: CanActivateFn = (route, state) => {
  let response = confirm("You Want to leave page");

  if(response== true)
  {
    return true;
  }
  else{
    return false;
  }
};
