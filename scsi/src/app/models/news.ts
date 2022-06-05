export class News {
    heading: string = '';
    description: string = '';
    timestamp: string = '';
    operator_id: string = '';
    constructor(description: string, heading: string, operator_id: string, timestamp: string) {
        this.description = description;
        this.heading = heading;
        this.timestamp = timestamp;
        this.operator_id = operator_id;
    }
}
