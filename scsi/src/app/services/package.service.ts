import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { NetPackage } from '../models/net-package';

@Injectable({
  providedIn: 'root'
})
export class PackageService {

  constructor(private http: HttpClient) { }

  addNewPackage(netPackage: NetPackage) {
    let name = netPackage.name;
    let speed = netPackage.speed;
    let cost = netPackage.cost;
    return this.http.post<any>(`${environment.apiUrl}/addpackage.php`, { name, speed, cost })
      .pipe(map(NetPackage => {
        return NetPackage;
      }));
  }

  getAllPackage(): Observable<NetPackage[]> {
    return this.http.get<NetPackage[]>(`${environment.apiUrl}/addpackage.php`);
  }
}
