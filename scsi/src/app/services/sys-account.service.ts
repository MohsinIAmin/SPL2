import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Sysadmin } from '../models/sysadmin';

@Injectable({
  providedIn: 'root'
})
export class SysAccountService {

  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  
  constructor(private http: HttpClient) { }

  register(sysadmin: Sysadmin) {
    let username = sysadmin.username;
    let mobileNumber = sysadmin.mobileNumber;
    let password = sysadmin.password;
    let jobId = sysadmin.jobId;
    return this.http.post<any>(`${environment.apiUrl}/sysregister.php`, { username, mobileNumber, jobId, password })
      .pipe(map(Sysadmin => {
        return Sysadmin;
      }));
  }

  login(userName: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/syslogin.php`, { userName, password })
      .pipe(map(Sysadmin => {
        localStorage.setItem('token',Sysadmin[0].userName);
        this.getLoggedInName.emit(true);
        return Sysadmin;
      }));
  }
}
