import { Injectable } from "@angular/core";
import { UserLogin, UserRegistration } from '../../../Models/UserModels'

@Injectable({
  providedIn: 'root'
})

export class UserService {

 registerUser!: UserRegistration;
 loginUser!: UserLogin;

login(loginModel: UserLogin){
  //once api is set up in backend, this function will make an http POST call
  if (loginModel.username != null && loginModel.password != null) {
    return true;
  }
  return false;
}
 register(registerModel: UserRegistration){
   //once api is set up in backend this function will an http POST call to add user to database
   if(registerModel.username != null && registerModel.email != null && registerModel.password != null){
     return true;
   }
   return false;
 }



}
