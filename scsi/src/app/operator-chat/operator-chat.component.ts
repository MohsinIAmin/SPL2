import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Pusher from 'pusher-js';
import { first, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
import { Message } from '../models/message';
import { CustomerAccountService } from '../services/customer-account.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-operator-chat',
  templateUrl: './operator-chat.component.html',
  styleUrls: ['./operator-chat.component.css']
})
export class OperatorChatComponent implements OnInit {

  allCustomer: Customer[] = [];
  messages: any = [];
  customerMessages: any = [];
  message: string = '';
  customer = new Customer('', '', '', '', '', '');

  constructor(private customerService: CustomerAccountService, private messageService: MessageService, private router: Router, private http: HttpClient, private messegeService: MessageService) { }

  ngOnInit(): void {

    Pusher.logToConsole = true;

    const pusher = new Pusher('4a35f3bd8516c1927850', {
      'cluster': 'ap2'
    });

    const channel = pusher.subscribe('my-channel');

    channel.bind('my-event', (data: Message) => {
      // this.messages.push(data);
      this.getAllChat();
      this.chatCustomer(this.customer);
    });

    this.getAllCustomer();
    this.getAllChat();

  }

  getAllCustomer() {
    this.customerService.getAllCustomer()
      .subscribe(response => {
        this.allCustomer = response.map(item => {
          return new Customer(item.username, item.mobileNumber, item.address, item.password, item.type, item.package_id);
        });
      });
  }

  getAllChat() {
    this.messageService.getCustomerChat()
      .subscribe(response => {
        this.messages = response.map(item => {
          return new Message(item.customer_id, item.message, item.timestamp, item.type);
        });
      });
  }

  chatCustomer(customer: Customer) {
    this.customer = customer;
    this.customerMessages = this.messages.filter(function (mess: any) {
      return mess.customer_id == customer.username;
    });
  }


  send(): void {
    if(this.customer.username == ''){
      return;
    }
    if(this.message == ''){
      return;
    }
    this.submit()
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
          this.customerMessages.push(data);
          this.message = '';
        }
      );
  }

  submit() {
    return this.http.post(`${environment.apiUrl}/message.php`, {
      customer_id: this.customer.username,
      message: this.message,
      timestamp: String(Date.now()),
      type: 'receive'
    }).pipe(map(Message => {
      return Message;
    }));
  }

  takeCall(){
    if(this.customer.username == ''){
      return;
    }
    this.router.navigate(['operatorcall']);
  }
}
