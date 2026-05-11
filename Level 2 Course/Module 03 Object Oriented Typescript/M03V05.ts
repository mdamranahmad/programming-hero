// Access Modifiers
// modifiers that modifies access to a property

// lets create a class
class BankAcc {
    userId: string;
    userName: string;
    userBalance: number;

    constructor(userId: string, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
}

// lets create an instance of BankAcc
const mrXAcc = new BankAcc('007', 'Mr X', 100);

// what if a new value is assigned to properties of that instance?
mrXAcc.userId = "222";

console.log(mrXAcc);    // BankAcc { userId: '222', userName: 'Mr X', userBalance: 100 }

// mrXAcc got mutated, which is unacceptable
// to prevent modification, we can use readonly modifier

class BankAcc1 {
    readonly userId: string;
    userName: string;
    userBalance: number;

    constructor(userId: string, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
}

const mrYAcc = new BankAcc1('007', 'Mr Y', 100);

mrYAcc.userId = "222";  // now we are facing an error that prevent us modification
/*
Cannot assign to 'userId' because it is a read-only property.
*/

// public and private operator
// by default, class proerties and methods are public, can be accessed and modified from outside
// private keyword prevent outside access

class BankAcc2 {
    public readonly userId: string;         // can be accessed from outside
    public userName: string;                // can be accessed from outside
    private userBalance: number;            // private, hence only have access from inside

    constructor(userId: string, userName: string, userBalance: number) {
        this.userId = userId;
        this.userName = userName;
        this.userBalance = userBalance;
    }
}

const mrZAcc = new BankAcc2('007', 'Mr Y', 100);

mrZAcc.userBalance = 0;     // ERROR- no access from outside
// Property 'userBalance' is private and only accessible within class 'BankAcc2'.

class BankAcc3 {
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

    addBalance(bal: number) {
        this.userBalance += bal;    // private property being accessed from inside own class
    }
}

const mrAAcc = new BankAcc3('007', 'Mr Y', 100, 'string');

console.log(mrAAcc);        // output- BankAcc3 { userId: '007', userName: 'Mr Y', userBalance: 100 }

mrAAcc.addBalance(50);      // private property accessible from outside

console.log(mrAAcc);        // output- BankAcc3 { userId: '007', userName: 'Mr Y', userBalance: 150 }

// private properties are not accessible from extended child too
// protected properties are un-accessible from outside, but accessible from child

// create a new class
class StdBankAcc extends BankAcc3 {
    test() {
        this.userPass = 'checked';  // protected properties accessible within sub-class
    }
}

const mrBAcc = new BankAcc3('007', 'Mr Y', 100, 'string');

mrBAcc.userPass = 'changed';
// Property 'userPass' is protected and only accessible within class 'BankAcc3' and its subclasses.



