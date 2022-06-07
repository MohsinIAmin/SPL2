export class Message {
    customer_id: string = '';
    message: string = '';
    timestamp: string = '';
    type: string = '';
    constructor(customer_id: string, message: string, timestamp: string, type: string) {
        this.customer_id = customer_id;
        this.message = message;
        this.timestamp = timestamp;
        this.type = type;
    }
}
