class Customer2{
    private _firstname: string;
    private _lastname: string;    

    constructor(first: string, last:string) {
        this._firstname = first;
        this._lastname = last;
    }

    get firstName(): string {
        return this._firstname;
    }

    //no void type needed
    set firstName(value: string) {
        this._firstname = value;
    }

    get lastName(): string {
        return this._lastname;
    }

    set lastName(value: string) {
        this._lastname = value;
    }
}

//create instance
let myCustomer2 = new Customer2("martin", "dixon");

console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);