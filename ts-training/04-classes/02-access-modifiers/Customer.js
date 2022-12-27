var Customer2 = /** @class */ (function () {
    function Customer2(first, last) {
        this._firstname = first;
        this._lastname = last;
    }
    Object.defineProperty(Customer2.prototype, "firstName", {
        get: function () {
            return this._firstname;
        },
        //no void type needed
        set: function (value) {
            this._firstname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer2.prototype, "lastName", {
        get: function () {
            return this._lastname;
        },
        set: function (value) {
            this._lastname = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer2;
}());
//create instance
var myCustomer2 = new Customer2("martin", "dixon");
console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);
