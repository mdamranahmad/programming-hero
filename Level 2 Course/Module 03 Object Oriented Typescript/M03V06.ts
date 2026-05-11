// Getter and Setter

class BankAcc4 {
    public readonly userId: string;         // can be accessed from outside
    public userName: string;                // can be accessed from outside
    private userBalance: number;            // private, hence only have access from inside
    protected userPass: string;             // protected is similar to private, but a little bit different

    constructor(userId: string, userName: string, userBalance: number, userPass: string) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
        this.userPass = userPass; 
    }
    // addBalance method set the userBalance property
    set addBalance(bal: number) {   // setter is added
        this.userBalance += bal;    // private property being accessed from inside own class
    }
    // to get
    get getBalance() {
        return this.userBalance;
    }

}

const mrCAcc = new BankAcc4('007', 'Mr Y', 100, 'string');

console.log(mrCAcc);        // output- BankAcc3 { userId: '007', userName: 'Mr Y', userBalance: 100 }

console.log(mrCAcc);        // output- BankAcc3 { userId: '007', userName: 'Mr Y', userBalance: 150 }

// private properties are not accessible from extended child too
// protected properties are un-accessible from outside, but accessible from child

// create a new class
class StdBankAcc1 extends BankAcc4 {
    test() {
        this.userPass = 'checked';  // protected properties accessible within sub-class
    }
}

const mrDAcc = new BankAcc4('007', 'Mr Y', 100, 'string');

mrDAcc.userPass = 'changed';

console.log(mrDAcc.getBalance);
console.log(mrCAcc.getBalance);

// in BankAcc4, we have to call a method to set or get value
// we need to use set and get
// set added to Ln 16, get is added to Ln 20
// set automatically returns a value, no return needed
// get must return a value


mrCAcc.addBalance = 1550;
console.log(mrCAcc.getBalance);
console.log(mrCAcc);

// get and set is a way to access methods as properties through dot notation, without calling function
