import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { TicketService } from '../services/ticket.service';

@Component({
  selector: 'app-sys-solve-ticket',
  templateUrl: './sys-solve-ticket.component.html',
  styleUrls: ['./sys-solve-ticket.component.css']
})
export class SysSolveTicketComponent implements OnInit {

  ticketWorking = this.ticketService.getWorkingTicket();
  constructor(private ticketService: TicketService, private router: Router) { }

  ngOnInit(): void {
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
