// Generic with Type Interface


interface Developer <T,M = null> {       // <T> - denotes dynamically received properties
    name: string;
    salary: number;
    device: {
        brand: string;
        model: string;
        releasedYear: string;
    };
    smartWatch: T;              // properties for smartwatch will be received dynamically
    bike ?: M;                  // optional properties, declared with dynamic param
};

interface SmartWatch  {         // interface declaration
    heartRate: string;
    stopWatch: boolean;
};

const poorDeveloper : Developer<SmartWatch, {
    brand: 'Yamaha',
    engineCapacity: '200cc'
}> = {                                      // dynamically adding types to generics
    name: 'Mr Poor',
    salary: 20,
    device: {
        brand: 'Lenovo',
        model: 'A21',
        releasedYear: '2010',  
    },
    smartWatch: {
        heartRate: '72',
        stopWatch: false,
    }
};

interface SmartSmartWatch extends SmartWatch {  // interface extension for extra features
    heartRate: string;
    callSupport: boolean;
    calculator: boolean;
    airFeature: boolean;
}

interface Bike {
    brand: string;
    engineCapacity: string;
}

const richDeveloper : Developer<SmartSmartWatch> = {    // application of interface, interface extension with generic
    name: 'Mr Rich',
    salary: 100,
    device: {
        brand: 'HP',
        model: 'Y24',
        releasedYear: '2022',  
    },
    smartWatch: {
        heartRate: '72',
        stopWatch: false,
        calculator: true,
        callSupport: false,
        airFeature: true,
    }
};

console.log(richDeveloper);

