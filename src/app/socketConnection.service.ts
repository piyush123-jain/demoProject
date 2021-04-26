import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Subject, Observable, observable } from 'rxjs';

@Injectable()
export class socketConnectionService {
    serverMessage$: Observable<any>;
    constructor(private http: HttpClient) { this.serverMessage$ = this.pushSource.asObservable()  }

    
    checkEmailApi = environment.serverUrl+'/checkEmail'
    
    private pushSource = new Subject<object>();
  
  subject = new Subject();
  
  emailCheck(email: any ){
    this.http.post(this.checkEmailApi,{email:email}).subscribe((data)=>{
        this.pushSource.next(data)
      })
    }
    
  connectionWithServer(login: any,loginUrl: string){
  this.http.post(environment.serverUrl+loginUrl,login).subscribe((data)=>{
  this.pushSource.next(data)
  })
  }

}