import { Injectable } from '@angular/core';

import { users } from '../mock-users';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor() {}

  getUsers() {
    return users;
  }
}
