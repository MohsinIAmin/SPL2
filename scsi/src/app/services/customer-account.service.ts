import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerAccountService {

  constructor(private http: HttpClient) { }

  register(customer: Customer) {
    console.log(customer);
    let username = customer.username;
    let mobileNumber = customer.mobileNumber;
    let password = customer.password;
    let address = customer.address;
    return this.http.post<any>(`${environment.apiUrl}/customerregister.php`, { username, mobileNumber, address, password })
      .pipe(map(Customer => {
        return Customer;
      }));
  }
}
