import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Operator } from '../models/operator';

@Injectable({
  providedIn: 'root'
})
export class OperatorAccountService {
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  
  constructor(private http: HttpClient) { }

  register(operator: Operator) {
    let username = operator.username;
    let mobileNumber = operator.mobileNumber;
    let password = operator.password;
    let jobId = operator.jobId;
    return this.http.post<any>(`${environment.apiUrl}/operatorregister.php`, { username, mobileNumber, jobId, password })
      .pipe(map(Operator => {
        return Operator;
      }));
  }

  login(userName: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/operatorlogin.php`, { userName, password })
      .pipe(map(Operator => {
        return Operator;
      }));
  }

  getOperator(userName: any) {
    return this.http.post<any>(`${environment.apiUrl}/getoperator.php`, { userName })
      .pipe(map(Operator => {
        return Operator;
      }));
  }
}
