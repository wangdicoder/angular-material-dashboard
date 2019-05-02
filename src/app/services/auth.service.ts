import { Injectable } from '@angular/core';
import { User } from 'app/models/user';
import { Auth } from 'aws-amplify';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    Auth.currentSession().then(r => console.log(r));

  }

  onLogin(user: User) {
    return Auth.signIn(user.email, user.password).then(res => {
      return Auth.currentUserInfo()
    })
  }

  onLogout(user: User) {
  }

  onRegister(user: User) {
    console.log(user)
    return Auth.signUp({
      username: user.email,
      password: user.password,
      attributes: {
        email: user.email
      },
      validationData: []
    })
  }

  currentUserInfo() {
    return Auth.currentUserInfo()
  }
}
