import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor( private httpclient: HttpClient) { }

 getlogin() {
   return this.httpclient.get('http://localhost:3000/login');
 }
}
