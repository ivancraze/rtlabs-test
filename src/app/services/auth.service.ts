import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of, throwError } from 'rxjs';

import { IUser } from '../models/user';

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

  private setToken(token: string) {
    sessionStorage.setItem('token', token);
  }

  private getToken() {
    return sessionStorage.getItem('token');
  }

  deleteToken(key: string) {
    return sessionStorage.removeItem(key);
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

  logout(): void {
    if (confirm('Are you sure?')) {
      this.deleteToken('token');
      this.router.navigate(['login']);
    }
    return;
  }
}
