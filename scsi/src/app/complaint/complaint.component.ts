import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-complaint',
  templateUrl: './complaint.component.html',
  styleUrls: ['./complaint.component.css']
})
export class ComplaintComponent implements OnInit {

  newTicket = new Ticket('', '', '', '', '', '');

  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {
    this.newTicket.customer_id = String(localStorage.getItem('token'));
  }

  submit() {
    this.newTicket.timestamp = String(Date.now());
    this.ticketService.addNewTicket(this.newTicket)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['account']);
        },
        error => {
          alert('Package already exixt');
          this.router.navigate(['account']);
        }
      );
  }

}
