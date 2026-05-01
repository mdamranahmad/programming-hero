// spread operator

const friends = ["Rahim", "Karim"];

const schoolFriends = ['pintu', 'Chintu', 'Bulbul'];

const collegeFriends = ['Mr. Smart', 'Mr. Very Smart'];

// friends.push(schoolFriends);        // string array is not assignable to string
friends.push(...schoolFriends, ...collegeFriends);        // using spred operator to resolve the issue

// console.log(friends);

// spread operator on object

const user = {
    name : 'Md Amran',
    phoneNo : '01675 014095',
}

const otherInfo = {
    hobby : 'Sleeping',
    favouriteColor : 'Metalic Blue',
}

const userInfo = {...user, ...otherInfo};

// console.log(userInfo);

// Rest operator - to aggregate spread elements

const sendInvite = (friend1 : string, friend2 : string, friend3 : string) => {
    console.log(`Sent invitation to ${friend1}`);
    console.log(`Sent invitation to ${friend2}`);
    console.log(`Sent invitation to ${friend3}`);
}

// sendInvite('pintu', 'chintu', 'bulbul');


const sendInvite2 = (...friends: string[]) => {     // rest operator 
    friends.forEach((friend : string) =>
    console.log(`send invitation to ${friend}`)
    )
}

sendInvite2('pintu', 'chintu', 'bulbul', 'mokbul', 'chulbul');



