"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer4 = void 0;
var Customer4 = /** @class */ (function () {
    function Customer4(_fname, _lname) {
        this._fname = _fname;
        this._lname = _lname;
    }
    Object.defineProperty(Customer4.prototype, "firstName", {
        get: function () {
            return this._fname;
        },
        set: function (value) {
            this._fname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer4.prototype, "lastName", {
        get: function () {
            return this._lname;
        },
        set: function (value) {
            this._lname = value;
        },
        enumerable: false,
        configurable: true
    });
    return Customer4;
}());
exports.Customer4 = Customer4;
