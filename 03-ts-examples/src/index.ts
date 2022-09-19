import { Person } from "./Person";

let p1: Person = new Person("Amit", 40);
let p2: Person = new Person("Sumit", 35);

console.log(p1.toString());
console.log("Name:", p2.getName(), "/ Age:", p2.getAge());