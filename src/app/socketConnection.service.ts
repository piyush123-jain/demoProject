import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Subject, Observable, observable } from 'rxjs';

@Injectable()
export class socketConnectionService {
    serverMessage$: Observable<any>;
    passwordMatch$: Observable<any> ;

    constructor(private http: HttpClient)
     {
        this.serverMessage$ = this.pushSource.asObservable()
        this.passwordMatch$ = this.passwordMatchValue .asObservable()
      }

    
    checkEmailApi = environment.serverUrl+'/checkEmail'
    
    private pushSource = new Subject<object>();
    private passwordMatchValue = new Subject<object>();
  
  subject = new Subject();
  
  emailCheck(email: any ){
    this.http.post(this.checkEmailApi,{email:email}).subscribe((data)=>{
        this.pushSource.next(data)
      })
    }
    
  connectionWithServer(login: any,loginUrl: string){
  this.http.post(environment.serverUrl+loginUrl,'demo123s@mailinator.com').subscribe((data)=>{
  this.pushSource.next(data)
  })
  }
  PasswordMatchOrNot(values:any){
  this.passwordMatchValue.next(values);
  }

}