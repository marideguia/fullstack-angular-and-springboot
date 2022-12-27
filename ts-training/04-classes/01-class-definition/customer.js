var Customer = /** @class */ (function () {
    function Customer(first, last) {
        this.firstname = first;
        this.lastname = last;
    }
    return Customer;
}());
//create instance
var myCustomer = new Customer("martin", "dixon");
console.log(myCustomer.firstname);
console.log(myCustomer.lastname);
myCustomer.firstname = "Martin";
myCustomer.lastname = "Dixon";
console.log(myCustomer.firstname);
console.log(myCustomer.lastname);
