import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from 'src/app/services/notificationAlert/notification.service';
import { CustomValidators } from 'src/app/shared/validators/custom-validators';
import swal from 'sweetalert';
import { LoginDto } from '../../model/login-dto';
import { LoginService } from '../../service/login.service';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.css']
})
export class CreatePasswordComponent implements OnInit {
  createPasswordForm: FormGroup;
  visible1: boolean = true;
  visible2: boolean = true;
  changeType1: boolean = true;
  changeType2: boolean = true;
  match: boolean = true;
  logindto = new LoginDto;
  constructor(private formbuilder: FormBuilder,
    private loginService: LoginService,
    private router: Router,
    private noficationAlert: NotificationService) { }

  ngOnInit(): void {
    this.createForm();
    this.loginService.getSysUser().subscribe(res => {
    })


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
      dob: ['', [Validators.required]]
    },
      [CustomValidators.MatchValidator('newpassword', 'confirmPassword')]);
  }

  onSubmit() {

    if (localStorage.getItem("dob") == this.createPasswordForm.value.dob) {
      if (this.createPasswordForm.value.newPassword == this.createPasswordForm.value.confirmPassword) {
        this.logindto = new LoginDto
        this.logindto.systemUser = {
          id: localStorage.getItem("user"),
          password: this.createPasswordForm.value.newPassword
        }

        this.loginService.createPassword(this.logindto.systemUser).subscribe(res => {

          if (res) {
            this.noficationAlert.showSuccess("Your password is successfully created", "Success")
            this.router.navigate(['login'])
          }
        })
      }
      else {
        this.noficationAlert.showWarning("Password not match", "Warning")

      }
    }
    else {
      this.noficationAlert.showWarning("Invalid date of birth", "Warning")

    }

  }



}
