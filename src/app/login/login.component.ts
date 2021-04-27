import { Component, OnInit } from '@angular/core';
import { socketConnectionService } from '../socketConnection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginData: any = { };
  response:any = ' ';
  responseBoolean: any = false;
  constructor(private socket : socketConnectionService) {
    this.socket.serverMessage$.subscribe(data=>{
        this.response= data['message'];
        this.responseBoolean= data['value'];
        
    })

   }

  ngOnInit(): void {  }
  onSubmit() {
    this.socket.connectionWithServer(this.loginData,'/login');

  }

}
