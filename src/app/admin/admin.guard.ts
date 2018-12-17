import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private angAuth: AngularFireAuth, private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    this.angAuth.authState.subscribe((data) => {

      if (data === null) {
        this.angAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
        this.router.navigate(['']);
      } else {
        if (data.uid !== 'BBNzCMQcaeds4YK4zKTDywsJ8Sq2') {
          this.angAuth.auth.signOut();
          this.router.navigate(['']);
        }
      }
    });

    return true;


  }
}
