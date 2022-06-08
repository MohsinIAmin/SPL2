import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import Pusher from 'pusher-js';
import { first, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Message } from '../models/message';
import { MessageService } from '../services/message.service';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { Router } from '@angular/router';


@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {

  // @ViewChild('remoteVideo') remoteVideo!: ElementRef;
  messages: any = [];
  customer_id: string = String(localStorage.getItem('token'));
  message = '';
  customerMessages: any = [];

  constructor(private http: HttpClient,
    private messageService: MessageService,
    private router:Router) { }

  ngOnInit(): void {


    Pusher.logToConsole = true;

    const pusher = new Pusher('4a35f3bd8516c1927850', {
      'cluster': 'ap2'
    });

    const channel = pusher.subscribe('my-channel');

    channel.bind('my-event', (data: Message) => {
      // this.messages.push(data);
      this.getAllChat();
    });

    this.getAllChat();
    console.log(this.messages);

    // this.signalingService
    //   .getMessages()
    //   .subscribe((payload) => this._handleMessage(payload));

    const firebaseConfig = {
      apiKey: "AIzaSyBurRNmPDdkkCX-jCE2XOGrohbIX66VFQY",
      authDomain: "scsi-d5247.firebaseapp.com",
      projectId: "scsi-d5247",
      storageBucket: "scsi-d5247.appspot.com",
      messagingSenderId: "459413371223",
      appId: "1:459413371223:web:7d3d8e2eb3218e266ba612",
      measurementId: "G-ZZB53YWTF0"
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);

  }

  send(): void {
    if (this.message == '') {
      return;
    }
    this.submit()
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.messages.push(data);
          this.message = '';
        }
      );
  }

  submit() {
    return this.http.post(`${environment.apiUrl}/message.php`, {
      customer_id: this.customer_id,
      message: this.message,
      timestamp: String(Date.now()),
      type: 'sent'
    }).pipe(map(Message => {
      return Message;
    }));
  }

  getAllChat() {
    this.messageService.getCustomerChat()
      .subscribe(response => {
        this.messages = response.map(item => {
          return new Message(item.customer_id, item.message, item.timestamp, item.type);
        });
        this.customerMessages = this.messages.filter(function (mess: any) {
          return mess.customer_id == String(localStorage.getItem('token'));
        });
      });
  }

  public makeCall(): void {
    this.router.navigate(['call']);
    // await this.callService.makeCall(this.remoteVideo);
  }

  // private async _handleMessage(data: any): Promise<void> {
  //   switch (data.type) {
  //     case 'offer':
  //       await this.callService.handleOffer(data.offer, this.remoteVideo);
  //       break;

  //     case 'answer':
  //       await this.callService.handleAnswer(data.answer);
  //       break;

  //     case 'candidate':
  //       this.callService.handleCandidate(data.candidate);
  //       break;

  //     default:
  //       break;
  //   }
  // }

}
