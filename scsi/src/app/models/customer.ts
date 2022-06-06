export class Customer {
    username: string = '';
    mobileNumber: string = '';
    address: string = '';
    password: string = '';
    type: string = '';
    package_id: string = '';
    constructor(username: string, mobileNumber: string, address: string, password: string, type: string, package_id: string) {
        this.username = username;
        this.mobileNumber = mobileNumber;
        this.address = address;
        this.password = password;
        this.type = type;
        this.package_id = package_id;
    }
}
