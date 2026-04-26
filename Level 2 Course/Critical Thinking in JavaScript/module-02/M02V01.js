const course1 = {name : "Programming Hero"};
const course2 = {name : "Next Level Web Development"};

const courses = [
    [course1, "Level1"],
    [course2, "Level2"],
];

const map = new Map(courses);

console.log(map);