// Encapsulation, the 4th pillar of OOP
// we have already used encapsulation through acces modifiers

// encapsulation- hide properties from outside the world

class BankAcc5 {
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

const mrEAcc = new BankAcc5('007', 'Mr Y', 100, 'string');

// userBalance property hidden from outside of class BankAcc5- encapsulated
// we can also encapsulate methods