import { R3SelectorScopeMode } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService/auth.service';
import { ConfirmationDialogService } from 'src/app/services/confirmationDialog/confirmation-dialog.service';
import { NotificationService } from 'src/app/services/notificationAlert/notification.service';
import { TokenInterceptorService } from 'src/app/services/token-interceptor.service';
import { LoginDto } from './model/login-dto';
import { LoginService } from './service/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  submitted = false;
  btnName = "Login";
  userNameValid = false;
  logindto: LoginDto;
  loginShow=false
  visible1=true;
  changeType1: boolean=true;

  constructor(private formbuilder: FormBuilder,
    private router: Router, private authService: AuthService,
    private token: TokenInterceptorService,
    private loginService: LoginService,
    private confirmationDialogService: ConfirmationDialogService,
    private noficationAlert: NotificationService) { }

  ngOnInit(): void {
    this.createForm();

    console.log(window.innerWidth)
    


  }
  get f() { return this.loginForm.controls; }
  createForm() {
    this.loginForm = this.formbuilder.group({
      email: ['', [Validators.required,Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  show1(){
    this.visible1 = !this.visible1;
    this.changeType1 = !this.changeType1;
  }

  onSubmit() {
    if (this.loginForm.value.email != null) {
      this.logindto = new LoginDto
      this.logindto.systemUser = {
        email: this.loginForm.value.email
      }

          if (this.loginForm.valid) {
        
                  this.authService.loginUser(this.loginForm.value).subscribe(res => {
                    if (res) {
                      localStorage.setItem("login","true")
                      localStorage.setItem("user1", JSON.stringify(res.systemUser))
                      localStorage.setItem("token", res.token)
                      this.router.navigate(['designation'])

                    }
                  },(error)=>{
                    this.noficationAlert.showError(
                      error.error,
                      "error")
                    }
                  )
          }

        
      }(error)=>{
        this.noficationAlert.showError(
          error.error,
          "error")
      }
    
    }

  }

  



