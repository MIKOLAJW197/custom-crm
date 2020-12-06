import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  sub: Subscription;
  isUserLogged = false;
  constructor(private authService: AuthService, private router: Router) {
    this.sub = this.authService.loggedUser.subscribe(
      (value) => (this.isUserLogged = !!value)
    );
  }

  navigate(): void {
    this.router.navigate(this.isUserLogged ? ['/admin'] : ['/login']);
  }

  logOut(): void {
    this.authService.loggedUser.next(null);
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
