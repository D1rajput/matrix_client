import { Component, OnInit } from '@angular/core';
import { ConfirmationDialogService } from 'src/app/services/confirmationDialog/confirmation-dialog.service';
import { NotificationService } from 'src/app/services/notificationAlert/notification.service';
import { Designation } from '../../model/designation';
import { DesignationService } from '../../service/designation.service';

@Component({
  selector: 'app-designation',
  templateUrl: './designation.component.html',
  styleUrls: ['./designation.component.css']
})
export class DesignationComponent implements OnInit {
  desiganation: any;
  desiganationInstance=new Designation()
  filter = "";
  filtereddesiganation: any;
  height:number;
  size=9;
  width:number
  constructor(private desigService: DesignationService,
    private confirmationDialogService: ConfirmationDialogService,
    private noficationAlert: NotificationService) { }
  p: number = 1
  filterFun() {
    this.filter = ""
    this.filtereddesiganation = this.desiganation
  }
  ngOnInit(): void {
    this.getEvents();

    this.height=window.innerHeight
    this.width=window.innerWidth

    if(this.height>=759 && this.height<=761)
    {
      this.size=8
    }
    else if(this.height<=941 && this.height>=877)
    {
      this.size=10
    }
    else if(this.height>=965 && this.height<=975)
    {
      this.size=11
    }
    else if(this.height==1180){
      this.size=16
    }
    else if(this.height==1024 || this.height==800){
      this.size=14  
    }
    else if(this.height==1368){
      this.size=26
    }
    else if (this.height>=700 && this.height<=740){
      this.size=7
    }
    else if(this.height>=653 && this.height<=667)
    {
      this.size=6
    }


  }
  search(f) {
    if (this.filter != "") {
      this.p = 1
    }
    // console.log(f);
    this.filtereddesiganation = []
    this.desiganation.forEach(e => {
      // console.log(e.name);
      if (e.name.toLowerCase().includes(this.filter.toLowerCase())) {
        this.filtereddesiganation.push(e)
      }
    });
  }
  NoItm = false
  getEvents() {
    this.desigService.getDesignation().subscribe(res => {
      console.log("res---------->",res)
      this.desiganation = res;
      this.filtereddesiganation = this.desiganation
      console.log(res);
      
    })
  }
  open(data) {
    console.log(data);
    
    this.desiganationInstance.name= data.name
    this.desiganationInstance.id= data.id
    this.desiganationInstance.description= data.description
    this.desiganationInstance.isActive= data.isActive
  }
  action() {
    this.confirmationDialogService
    .confirm("confirmation", "Are you sure to Edit Role ?")
    .then((confirmed) => {

      if(confirmed){

    this.desigService.saveDesignation(this.desiganationInstance).subscribe(r=>
      {console.log(r)
        this.noficationAlert.showSuccess("Sucess","Role Edited Sucessfully");
  window.location.reload()
      },
      (error) => {
        this.noficationAlert.showError(
          error.error,
          "Error"
        );
      })

    }
    })
  }
}


