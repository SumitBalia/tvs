import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UserloginService {

  constructor(private http: HttpClient) { }
  userData:any;
  userLogin(name, pas): Observable<any>{
     return this.http.post('http://www.checkgaadi.com/reporting/vrm/api/test_new/int/gettabledata.php', JSON.stringify({
      username: name,
      password: pas
    })); 
  }

}
