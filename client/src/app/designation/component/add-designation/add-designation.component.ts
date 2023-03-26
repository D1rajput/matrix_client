import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { AuthService } from 'src/app/services/authService/auth.service';
import { ConfirmationDialogService } from 'src/app/services/confirmationDialog/confirmation-dialog.service';
import { NotificationService } from 'src/app/services/notificationAlert/notification.service';
import { Designation } from '../../model/designation';
import { DesignationService } from '../../service/designation.service';


@Component({
  selector: 'app-add-designation',
  templateUrl: './add-designation.component.html',
  styleUrls: ['./add-designation.component.css']
})
export class AddDesignationComponent implements OnInit {

  addDesignationform: FormGroup;
  submitted = false;
  designation = new Designation();
  systemUser :any;
  ShowFilter = false;
  show: boolean;
  

  constructor(private fb: FormBuilder, private router: Router,
    private confirmationDialogService: ConfirmationDialogService,
    private noficationAlert: NotificationService,
    private designationService : DesignationService,
    private auth :AuthService) { 
      this.systemUser = this.auth.getSystemUser()
    }

  ngOnInit(): void {
  
    this.createForm();
    // console.log("width",window.innerWidth)
  }
 getManageUserData() {
  this.designationService.getManageUserData().subscribe((response: any) => {
   // this.sysUsers = response;
  });
}


  createForm() {
    this.addDesignationform = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
    });
  }
  
  get f() { return this.addDesignationform.controls; }


  onSubmit() {
    this.submitted = true;
    if (this.addDesignationform.invalid) {
      return;
  }
    this.confirmationDialogService
      .confirm("confirmation", "Are you sure to Add Role ?")
      .then((confirmed) => {
        this.designation = new Designation();
        this.designation.id = this.addDesignationform.value.id;
        this.designation.name = this.addDesignationform.value.name;
        this.designation.description = this.addDesignationform.value.description;
        this.designation.createdBy =   this.systemUser.id;
        if(confirmed){
          this.designationService.saveDesignation(this.designation).subscribe( (response) => {
           if (response) {
            this.noficationAlert.showSuccess("Sucess","Role saved Sucessfully");
             this.addDesignationform.reset();
             this.router.navigate(['designation'])
           }
         }, (error) => {
           this.noficationAlert.showError(
             error.error,
             "Error"
           );
         })
         }
      });
  }
  onReset() {
    this.addDesignationform.reset();
  }

  cancel() {
    this.confirmationDialogService
      .confirm("confirmation", "Are you sure to cancel ?")
      .then((confirmed) => {
        if (confirmed) {
          this.addDesignationform.reset();
          this.router.navigate(["/events"]);
        }
      });
  }

}
