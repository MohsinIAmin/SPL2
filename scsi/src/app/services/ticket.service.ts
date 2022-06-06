import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Ticket } from '../models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {

  constructor(private http: HttpClient) { }
  workingTicket = new Ticket('', '', '', '', '', '');

  addNewTicket(ticket: Ticket) {
    let description = ticket.description;
    let customer_id = ticket.customer_id;
    let p_type = ticket.p_type;
    let timestamp = ticket.timestamp;
    return this.http.post<any>(`${environment.apiUrl}/addticket.php`, { description, customer_id, p_type, timestamp })
      .pipe(map(Ticket => {
        return Ticket;
      }));
  }

  getAllTicket(): Observable<Ticket[]> {
    return this.http.get<Ticket[]>(`${environment.apiUrl}/getallticket.php`);
  }
  setWorkingTicket(ticket: Ticket) {
    this.workingTicket = ticket;
  }
  getWorkingTicket() {
    return this.workingTicket;
  }

  updateTicket(ticketStatus : string) {
    let ticket_id = this.workingTicket.ticket_id;
    let status = ticketStatus;
    console.log(ticket_id);
    return this.http.post<any>(`${environment.apiUrl}/updateticket.php`, { ticket_id, status })
      .pipe(map(Ticket => {
        return Ticket;
      }));
  }
}
