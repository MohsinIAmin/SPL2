import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-operator-complaint',
  templateUrl: './operator-complaint.component.html',
  styleUrls: ['./operator-complaint.component.css']
})
export class OperatorComplaintComponent implements OnInit {

  newTicket = new Ticket('', '', '', '', '', '');

  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {
  }

  submit() {
    this.newTicket.timestamp = String(Date.now());
    this.ticketService.addNewTicket(this.newTicket)
      .pipe(first())
      .subscribe(
        data => {
          this.newTicket = new Ticket('', '', '', '', '', '');
          this.router.navigate(['operatorcomplaint']);
        },
        error => {
          this.router.navigate(['operatorcomplaint']);
        }
      );
  }

  chat() {
    this.router.navigate(['operatorchat']);
  }

}
