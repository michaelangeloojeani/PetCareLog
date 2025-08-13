import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged } from 'firebase/auth';

export const authGuard: CanActivateFn = async () => {
  const auth = inject(Auth);
  const router = inject(Router);
  const user = await new Promise<any>(resolve => {
    onAuthStateChanged(auth, u => resolve(u), () => resolve(null));
  });
  if (user) return true;
  router.navigateByUrl('/login');
  return false;
};