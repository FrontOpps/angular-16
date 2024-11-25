import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = !!localStorage.getItem('token'); // Example: Check if the token exists
  const router = inject(Router); // Use Angular's inject function for dependencies

  if (isLoggedIn) {
    return true; // Allow access
  } else {
    return router.createUrlTree(['/auth']); // Redirect to login if not authenticated
  }
};
