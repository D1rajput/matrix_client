import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationDialogService } from 'src/app/services/confirmationDialog/confirmation-dialog.service';
import { NotificationService } from 'src/app/services/notificationAlert/notification.service';
import { CustomValidators } from 'src/app/shared/validators/custom-validators';
import swal from 'sweetalert';

import { LoginDto } from '../../model/login-dto';
import { LoginService } from '../../service/login.service';



@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {

  createPasswordForm: FormGroup;
  visible1: boolean = true;
  visible2: boolean = true;
  changeType1: boolean = true;
  changeType2: boolean = true;
  match: boolean = true;
  logindto=new LoginDto;
  leaveExist: any;
  today;
  constructor(private formbuilder: FormBuilder,
    private loginService:LoginService,
    private confirmationDialogService: ConfirmationDialogService,
    private noficationAlert: NotificationService,
    private router:Router) { }

  ngOnInit(): void {
    this.createForm();
    this.loginService.getSysUser().subscribe(res=>{
      console.log("data",res);
      
    })
    this.today=new Date().toISOString().split("T")[0]

   console.log( localStorage.getItem("user"))
    console.log(localStorage.getItem("dob"))
      
  }


  show1() {
    this.visible1 = !this.visible1;
    this.changeType1 = !this.changeType1;
  }

  show2() {
    this.visible2 = !this.visible2;
    this.changeType2 = !this.changeType2;
  }


  change() {

    if (this.createPasswordForm.value.newpassword == this.createPasswordForm.value.confirmpassword) {
      this.match = false
    } else { this.match = true }

  }

  createForm() {
    this.createPasswordForm = this.formbuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      dob:['',[Validators.required]]
    },
      [CustomValidators.MatchValidator('newpassword','confirmPassword')]);
  }

  onSubmit() {
    console.log(this.createPasswordForm.value)

if(localStorage.getItem("dob") == this.createPasswordForm.value.dob){
    if (this.createPasswordForm.value.newPassword == this.createPasswordForm.value.confirmPassword) {
         this.logindto=new LoginDto
         this.logindto.systemUser={
          id:localStorage.getItem("user"),
          password:this.createPasswordForm.value.newPassword
         }
         console.log(this.logindto.systemUser)

         this.confirmationDialogService
      .confirm("confirmation", "Are you sure you want to reset Password?")
      .then((confirmed) => {

        if(confirmed){
         this.loginService.createPassword(this.logindto.systemUser).subscribe( (response) => {
          if (response) {
            this.noficationAlert.showSuccess("Success","Your password is successfully reset")
            this.createPasswordForm.reset();
            this.router.navigate(['login'])
          }
        }, (error) => {
          this.leaveExist = error.error
          this.noficationAlert.showError(
            error.error,
            "Error"
          );
        })
        }

        })
    }
     else{
      this.noficationAlert.showWarning("Password not match","Warning")

     }
    }
    else{
      this.noficationAlert.showWarning("Invalid date of birth","Warning")

    }


}
}