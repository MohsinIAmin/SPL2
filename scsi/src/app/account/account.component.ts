import { Component, OnInit } from '@angular/core';
import { first } from 'rxjs/operators';

import { Customer } from '../models/customer';
import { Ticket } from '../models/ticket';
import { CustomerAccountService } from '../services/customer-account.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  allTicket: Ticket[] = [];
  allTickets: Ticket[] = [];
  constructor(private customerService: CustomerAccountService,private ticketService: TicketService) { }

  customer = new Customer('', '', '', '', '', '');

  ngOnInit(): void {
    this.getCustomer();
    this.getAllTicket();
    console.log(this.customer);
  }

  getCustomer() {
    const userName = String(localStorage.getItem('token'));
    console.log(userName);
    this.customerService.getUser(userName)
      .pipe(first())
      .subscribe(
        data => {
          this.customer = data[0];
        }
      )
  }

  getAllTicket() {
    this.ticketService.getAllTicket()
      .subscribe(response => {
        this.allTicket = response.map(item => {
          return new Ticket(item.customer_id, item.p_type, item.description, item.timestamp, item.status, item.ticket_id);
        });
        this.allTickets = this.allTicket.filter(function(tic){
          return tic.customer_id == String(localStorage.getItem('token'));
        });
      });
      
  }
}
