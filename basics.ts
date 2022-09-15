// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameters

// Primitives

let age: number;

age = 12;

let userName: string | string[];

userName = 'Max';

let isInstructor: boolean;

isInstructor = true;

// More complex types

let hobbies: string[];

hobbies = ['Sports', 'Cooking'];

type Person =  {
    name: string;
    age: number;
};

let person: Person;

person = {
    name: 'Max',
    age: 32
};

// person = {
//     isEmployee: true
// };

let people: Person[];

// Type inference

let course: string | number = 'React - The Complete Guide';

course = 12341;

// Functions & types

function add (a: number, b: number) {
    return a + b;
}

function printOutput (value: any) {
    console.log(value);
}

// Generics

function insertAtBegining<T>(array: T[], value: T) {
    const newArray = [value, ...array];
    return newArray;
}

const demoArray = [1, 2, 3];

const updatedArray = insertAtBegining(demoArray, -1); // [-1, 1, 2, 3]
const stringArray = insertAtBegining(['a', 'b', 'c'], 'd')

// updatedArray[0].split('');

class Student {
    firstName: string;
    lastName: string;
    age: number;
    courses: string[];

    constructor(first: string, last: string, age: number, courses: string[]) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.courses = courses;
    }

    enroll(courseName: string) {
        this.courses.push(courseName);
    }
}

const student = new Student('Max', 'Schwarz', 32, ['Angular']);
student.enroll('React');

// student.course => Angular, React
