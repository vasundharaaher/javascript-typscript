const Singleton = (function(){
    let instance;
    function createInstance(){
        return { name: 'Singleton Instance'};
    }
    return{
        getInstance: function(){
            if (!instance){
                instance=createInstance();
            }
            return instance;
        }
    };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

console.log(instance1===instance2);
console.log(instance1);


console.log('Example 2 class and obj');

class Car{
    constructor(model){
        this.model = model;
    }
    drive(){
        console.log(`Driving a ${this.model}`);
    }
}

class CarFactory{
    static createCar(model){
        return new Car(model);
    }
}
const car1 = CarFactory.createCar('Toyota corolla');
const car2 = CarFactory.createCar('honda civic');

car1.drive();
car2.drive();