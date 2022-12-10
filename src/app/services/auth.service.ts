import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

import { users } from '../mock-users';
import { IUser } from '../types/user';

const userMock: IUser = {
  id: 1,
  email: 'admin@mail.com',
  password: 'admin123',
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private router: Router) {}

  getUsers() {
    return users;
  }

  setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  getToken() {
    return sessionStorage.getItem('token');
  }

  isAuth() {
    return this.getToken() !== null;
  }

  login(user: IUser): Observable<string | boolean> {
    if (user.email === userMock.email && user.password === userMock.password) {
      this.setToken('user-logged');
      return of(true);
    }
    return throwError(() => new Error('Invalid credentials'));
  }
}
