"use strict";
var Customer3 = /** @class */ (function () {
    function Customer3(_fname, _lname) {
        this._fname = _fname;
        this._lname = _lname;
    }
    Object.defineProperty(Customer3.prototype, "firstName", {
        get: function () {
            return this._fname;
        },
        set: function (value) {
            this._fname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer3.prototype, "lastName", {
        get: function () {
            return this._lname;
        },
        set: function (value) {
            this._lname = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer3;
}());
var myCustomer3 = new Customer3("marty", "dixon");
console.log(myCustomer3.firstName);
console.log(myCustomer3.lastName);
