import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) { }

  getCustomerChat() {
    return this.http.get<Message[]>(`${environment.apiUrl}/getallchat.php`);
  }
}
