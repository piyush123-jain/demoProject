import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { socketConnectionService } from '../socketConnection.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as isValid from '../must-match-password.directive';


@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  
})
export class SignUpComponent implements OnInit {
  
  
  public signUpData: any = {};
  demo = false;
  successMessage = false;
  dangeMessage = false;
  checkEmailMessage:any;
  passwordMatch:any;
  emailBorderSuccessMessage = false;

  password1: any; 
  password2: any;

  constructor(private http:HttpClient,private socket:socketConnectionService,private router:Router){
    this.socket.serverMessage$.subscribe(data=>{
        this.checkEmailMessage = '';  
      (!data.exists)?this.emailBorderSuccessMessage = true
      :this.checkEmailMessage = data.exists;
  })
  
    this.socket.passwordMatch$.subscribe(data=>{
      this.passwordMatch = data;
  })
  
  
  }



  ngOnInit() { }
  
  trueAndFalseStatement:any = { govt:false, pvt:false, bussiness:false, other:false };
  status = { marriedStatus:false, statusMarried: false }
  org_status:any = { govt:false, pvt:false, bussiness:false, other:false };

  // change value 
changeValue(e:any,name_of_object:any) {
    Object.entries(name_of_object)
    .forEach(([key, value]) =>
    { ( e == key) ?   name_of_object[e] = true 
      : name_of_object[key] = false; } )
  }
// check email
  checkEmail(){
    this.socket.emailCheck(this.signUpData.email);
  }
 



onSubmit() {
  console.log(this.emailBorderSuccessMessage );
    console.log(this.passwordMatch);
  if(!this.emailBorderSuccessMessage)
  {
    alert('check your data again');
    
}
else
{ 

  
  this.http.post('http://localhost:3000/signUpPannel',this.signUpData)
  .subscribe(datas=>{
    console.log(datas);
    if(datas == {}){
      this.router.navigate(['/verify']);      
    }
  })
}


}

}

