export class Customer4{
    constructor(private _fname:string, private _lname:string) {
    }

    public get firstName(): string {
        return this._fname;
    }

    public set firstName(value: string) {
        this._fname = value;
    }

    public get lastName(): string {
        return this._lname;
    }

    public set lastName(value: string) {
        this._lname = value;
    }
}
