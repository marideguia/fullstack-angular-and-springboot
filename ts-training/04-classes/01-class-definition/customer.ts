class Customer{
    firstname: string;
    lastname: string;

    constructor(first: string, last:string) {
        this.firstname = first;
        this.lastname = last;
    }
}

//create instance
let myCustomer = new Customer("martin", "dixon");

console.log(myCustomer.firstname);
console.log(myCustomer.lastname);

myCustomer.firstname = "Martin"; 
myCustomer.lastname = "Dixon";

console.log(myCustomer.firstname);
console.log(myCustomer.lastname);