function identity<T>(value: T): T {
    return value;
}

console.log(identity<string>("hello, typescript!"));
console.log(identity<number>(42));





class Box<T> {
    private contents: T;

    constructor(value : T){
        this.contents = value;
    }

    getConstructor(): T{
        return this.contents;
    }
}

const stringBox = new Box<string>("Typescript");
const numberBox = new Box<number>(20);

console.log(stringBox.getConstructor());
console.log(numberBox.getConstructor());