import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Customer } from '../models/customer';
import { CustomerAccountService } from '../services/customer-account.service';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-sys-solve-ticket',
  templateUrl: './sys-solve-ticket.component.html',
  styleUrls: ['./sys-solve-ticket.component.css']
})
export class SysSolveTicketComponent implements OnInit {

  ticketWorking = this.ticketService.getWorkingTicket();
  customer = new Customer('', '', '', '', '', '');
  constructor(private ticketService: TicketService, private router: Router, private customerService: CustomerAccountService) { }

  ngOnInit(): void {
    this.customer.username = this.ticketWorking.customer_id;
    this.getCustomer();
  }

  getCustomer() {
    this.customerService.getUser(this.customer.username)
      .pipe(first())
      .subscribe(
        data => {
          this.customer = data[0];
          console.log(this.customer);
        }
      )
  }

  solve() {
    this.ticketService.updateTicket('solved')
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    this.router.navigate(['syscomplaint']);
  }

  not_solve() {
    this.ticketService.updateTicket('pending')
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
    this.router.navigate(['syscomplaint']);
  }
}
