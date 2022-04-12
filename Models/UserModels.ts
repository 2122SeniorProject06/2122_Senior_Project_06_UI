//classes to create user login and registration models

export class UserModel {
  public userId?: string;

  UserModel() { }
}
export class UserRegistration {
  public Username!: string;
  public Email!: string;
  public Password!: string;
  public confirmedPassword!: string;
  public VerificationResults!: boolean[];
  public VerificationErrors!: string[];
  //public id!: number;
  UserRegistration() {

  }
}

export class UserLogin {
  public Email!: string;
  public Password!: string;
  UserLogin() {

  }
}
