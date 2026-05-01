// Union and Intersection types

//Union

type UserRole = 'admin'| 'user' | 'guest';

const getDashboard = (role :UserRole) => {
    role === 'admin' ?
        'Admin Dashboard': 
            role === 'user' ?
                'User Dashboard' :
                    'Guest Dashboard'; 
}

// Intersection

type Employe = {
    id: string;
    name: string;
    phoneNo: string;
}

type Manager = {
    designation: string;
    teamSize: number;
}

type EmployeManager = Employe & Manager  // intersection is defined using single &

const chowdhuryShaheb : EmployeManager = {
    name: 'Chowdhury Shahed',
    id: 'VIP',
    phoneNo: '007',
    designation: 'Meyer Bap',
    teamSize: 1,
}

console.log(chowdhuryShaheb);