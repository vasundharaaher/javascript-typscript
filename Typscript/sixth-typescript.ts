function Timestamped(constructor: Function){
    console.log(`Class ${constructor.name} created at : ${new Date().toLocaleString()}`);
}

@Timestamped

class User {
    constructor(public name: string){}

}

 const user = new User("Alice");





 function ReadOnly(target: any, propertyKey: string){
    Object.defineProperty(target, propertyKey,{
        writable: false,
    });
 }
 class Person{
    @ReadOnly
    birthDate: string;

    constructor(birthDate: string){
        this.birthDate = birthDate;

    }
 }
 const person  = new Person("1990-09-08");
 person.birthDate = "2000-01-03";