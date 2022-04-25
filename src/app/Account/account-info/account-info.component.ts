import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountEdit, UserAccount } from '../../../../Models/UserModels';
import { UserService } from 'src/app/Services/user.service';
@Component({
    selector: 'app-account-info',
    templateUrl: './account-info.component.html',
    styleUrls: ['./account-info.component.css']
})
export class AccountInfoComponent{
    @Input() accountInfo: UserAccount;
    isEdit: boolean = false;
    accountEdits: FormGroup;
    bgImage: HTMLElement | null = document.createElement('br');

    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private formBuilder: FormBuilder,
      private UserService: UserService) {
        this.accountInfo = new UserAccount();
        this.accountEdits = formBuilder.group({
          usernameCtrl: [''],
          emailCtrl: [''],
          newPassCtrl: [''],
          confirmCtrl: ['']

        });
     }
     ngOnInit() {

      this.bgImage = document.getElementById("bg-image");
      this.bgImage!.style.filter = "blur(8px)";
     }

     onSubmit() {
      const updateModel = new FormData();
      updateModel.append('usernameCtrl', this.accountEdits.get('usernameCtrl')?.value);
      updateModel.append('emailCtrl', this.accountEdits.get('emailCtrl')?.value);
      updateModel.append('newPassCtrl', this.accountEdits.get('newPassCtrl')?.value);
      updateModel.append('confirmCtrl', this.accountEdits.get('confirmCtrl')?.value);

      const accountModel = new AccountEdit();
      accountModel.new_Username = this.accountEdits.get('usernameCtrl')?.value;
      accountModel.new_Username = this.accountEdits.get('emailCtrl')?.value;
      accountModel.new_Username = this.accountEdits.get('newPassCtrl')?.value;
      accountModel.new_Username = this.accountEdits.get('confirmCtrl')?.value;
      accountModel.userID = localStorage.getItem('userID');

      this.UserService.updateAccount(accountModel).subscribe((result:any)=>{
        if(!result.verificationResults.includes(false)){
        //
        }
      })


    }
     switchToEdit(){
       this.isEdit = true;
     }

     saveEdits(){
       this.isEdit = false;
     }

     cancelEdit(){
      this.accountEdits.reset();
      this.isEdit = false;
     }
}
