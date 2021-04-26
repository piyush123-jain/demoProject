import { Component, OnInit } from '@angular/core';
import { socketConnectionService } from '../socketConnection.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginData: any = { };
  constructor(private socket : socketConnectionService) {
    this.socket.serverMessage$.subscribe(data=>{
      console.log('data');
      console.log(data);  
    })

   }

  ngOnInit(): void {  }
  onSubmit() {
    this.socket.connectionWithServer(this.loginData,'/login');

  }

}
