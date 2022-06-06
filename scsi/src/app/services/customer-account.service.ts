import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable, Output } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerAccountService {


  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

  constructor(private http: HttpClient) { }

  customerToUpdate = new Customer('', '', '', '', '', '');

  register(customer: Customer) {
    let username = customer.username;
    let mobileNumber = customer.mobileNumber;
    let password = customer.password;
    let address = customer.address;
    return this.http.post<any>(`${environment.apiUrl}/customerregister.php`, { username, mobileNumber, address, password })
      .pipe(map(Customer => {
        return Customer;
      }));
  }

  login(userName: string, password: string) {
    return this.http.post<any>(`${environment.apiUrl}/customerlogin.php`, { userName, password })
      .pipe(map(Customer => {
        return Customer;
      }));
  }

  getUser(userName: any) {
    return this.http.post<any>(`${environment.apiUrl}/getuser.php`, { userName })
      .pipe(map(Customer => {
        return Customer;
      }));
  }

  getAllCustomer(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${environment.apiUrl}/getallcustomer.php`);
  }

  setCustomerToUpdate(customer: Customer) {
    this.customerToUpdate = customer;
  }

  getCustomerToUpdate() {
    return this.customerToUpdate;
  }

  updateUser(customer: Customer) {
    let username = customer.username;
    let type = customer.type;
    let package_id = customer.package_id;
    return this.http.post<any>(`${environment.apiUrl}/updatecustomer.php`, { username, type, package_id })
      .pipe(map(NetPackage => {
        return NetPackage;
      }));
  }
}
