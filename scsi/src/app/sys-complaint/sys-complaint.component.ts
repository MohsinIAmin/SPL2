import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { Ticket } from '../models/ticket';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-sys-complaint',
  templateUrl: './sys-complaint.component.html',
  styleUrls: ['./sys-complaint.component.css']
})
export class SysComplaintComponent implements OnInit {

  allTicket: Ticket[] = [];

  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {
    this.getAllTicket();
  }

  getAllTicket() {
    this.ticketService.getAllTicket()
      .subscribe(response => {
        this.allTicket = response.map(item => {
          return new Ticket(item.customer_id, item.p_type, item.description, item.timestamp, item.status, item.ticket_id);
        });
      });
  }

  solve(ticket:Ticket) { 
      this.ticketService.setWorkingTicket(ticket);
      this.ticketService.updateTicket('working')
      .pipe(first())
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
        }
      );
      this.router.navigate(['solveticket']);
  }

}
