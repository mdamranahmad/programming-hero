// Explore Conditional Type

type A = null;
type B = undefined;

// type C = A extends null ? true : false; 
// type C is dependent on type A, hence true
// type C = A extends number ? true : false;
//  type C is dependent on type A, hence false
type C = A extends number ? 
    true : 
        B extends undefined ? 
            true :
                false; 
                // type C is dependent on type B, hence true
// so, when value of a type is dependent on value of another type, is called conditional type

// A type that lists vehicle owned by rich people
type RichPeoplesVehicle = {
    bike: string;
    car: string;
    ship: string;
};

// a type that checks if certain vehicle is listed as key of type RichPeopleVehicle
type CheckVehicle <T> = T extends keyof RichPeoplesVehicle ? 
    true :
        false;

// A type that checks if it owns bike 
// value of HasBike, HasShip depends on RIchPeoplesVehicle, hence conditional type
type HasBike = CheckVehicle<'bike'>;    // output - true
type HasShip = CheckVehicle<'ship'>;    // output - true
type HasShipC = CheckVehicle<'Ship'>;    // output - false, keys are case sensitive
type HasTractor = CheckVehicle<'Tractor'>;// output - false

// conditional types are rarely being used

