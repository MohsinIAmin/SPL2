export class Ticket {
    customer_id: string = '';
    p_type: string = '';
    description: string = '';
    timestamp: string = '';
    status: string = '';
    ticket_id: string = '';
    constructor(customer_id: string, p_type: string, description: string, timestamp: string, status: string, ticket_id: string) {
        this.customer_id = customer_id;
        this.p_type = p_type;
        this.description = description;
        this.timestamp = timestamp;
        this.status = status;
        this.ticket_id = ticket_id;
     }
}
