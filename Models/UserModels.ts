import { UserLoginComponent } from './../src/app/UserLogin/userlogin.component';
//classes to create user login and registration models


export class UserRegistration {
  public username!: string;
  public email!: string;
  public password!: string;
  public confirmpassword!: string;
  public id!: number;
  UserRegistration(Username: string, Email: string, Password: string, ConfirmPassword: string) {
    this.username = Username;
    this.email = Email;
    this.password = Password;
    this.confirmpassword = ConfirmPassword;
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
