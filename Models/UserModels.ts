//classes to create user login and registration models

export class UserModel {
  public userId?: string;

  UserModel() { }
}
export class UserRegistration {
  public username!: string;
  public email!: string;
  public password!: string;
  public confirmedPassword!: string;
  public verificationResults!: boolean[];
  public verificationErrors!: string[];
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

export class AccountModel {
  public username!: string;
  public email!: string;
  public oldPassword!: string;
  public password!: string;
  public confirmedPassword!: string;
  public verificationResults!: boolean[];
  public verificationErrors!: string[];
  public mostEffective!: string;
  public usefulMethods!: number[];
  public userId!: number;

  UserRegistration() {

  }
}