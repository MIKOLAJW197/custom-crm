import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { BASIC_URL, HttpService } from '../shared/http.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private httpService: HttpService) {}

  loggedUser = new BehaviorSubject(null);

  isUserLogged() {
    return !!this.loggedUser.value;
  }

  setUser(user) {
    this.loggedUser.next(user);
  }

  logInUser(email: string, password: string) {
    return this.httpService.logIn(email, password);
  }

  registerUser(email: string, password: string) {
    return this.httpService.registerNewUser(email, password);
  }
}
