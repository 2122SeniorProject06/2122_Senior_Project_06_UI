import { UserLoginComponent } from './../src/app/UserLogin/userlogin.component';
//classes to create user login and registration models


export class UserRegistration {
  public username!: string;
  public email!: string;
  public password!: string;
  UserRegistration(Username: string, Email: string, Password: string) {
    this.username = Username;
    this.email = Email;
    this.password = Password;
  }
}

export class UserLogin {
  public username!: string;
  public password!: string;
  UserLogin(Username: string, Password:string) {
    this.username = Username;
    this.password = Password;
  }
}
