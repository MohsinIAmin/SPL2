import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import Pusher from 'pusher-js';
import { first, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  messages: any = [];
  customer_id = String(localStorage.getItem('token'));
  message = '';
  constructor(private http: HttpClient) { }

  ngOnInit(): void {


    Pusher.logToConsole = true;

    const pusher = new Pusher('4a35f3bd8516c1927850', {
      'cluster': 'ap2'
    });

    const channel = pusher.subscribe('my-channel');

    channel.bind('my-event', (data: Message) => {
      console.log(data);
      this.messages.push(data);
    });
  }

  send(): void {
    this.submit()
      .pipe(first())
      .subscribe(
        data => {
          this.message = '';
          console.log(data);
        }
      );
  }

  submit() {
    return this.http.post(`${environment.apiUrl}/message.php`, {
      customer_id: this.customer_id,
      message: this.message,
      timestamp: String(Date.now())
    }).pipe(map(Message => {
      return Message;
    }));
  }

}
