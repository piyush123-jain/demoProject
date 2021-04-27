import { Component, OnInit } from '@angular/core';
import { socketConnectionService } from '../socketConnection.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.css']
})
export class VerifyEmailComponent {

  public verifyData: any = {};
  password:boolean = false;
  booleanResponse:boolean = false;

  public verifyPass:any = {};
  resonse: any;
 
  constructor(private socket : socketConnectionService) {
  this.socket.serverMessage$.subscribe(data=>{
    this.password = data.value;
    this.resonse = data.message;
  })

 }

onSubmit() {
    console.log(this.verifyData);
  this.socket.connectionWithServer(this.verifyData,'/verifyEmail');  }
}
