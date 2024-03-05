class Plant {
    constructor(growth, age) {
        this.growth = growth;
        this.age = age;
    }
    grow() {
        
       console.log(`Soon the rose will grow to ${this.growth + 10 + "cm"}`)
    }

}
class Rose extends Plant {
    constructor(growth, age, numberOfFlowers) {
        super(growth, age);
        this.numberOfFlowers = numberOfFlowers;
    }

}
const chinaRose = new Rose(50, 1.5, 10);
console.log(chinaRose);
chinaRose.grow();