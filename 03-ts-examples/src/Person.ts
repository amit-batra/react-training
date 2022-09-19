export class Person {

    private name: string;
    private age: number;

    public constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    public getName(): string {
        return this.name;
    }

    public getAge(): number {
        return this.age;
    }

    public toString(): string {
        return "[" + this.name + ", " + this.age + "]";
    }
}