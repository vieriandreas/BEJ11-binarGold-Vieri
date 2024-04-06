class Toyota {
    constructor(brand, color, maxSpeed, chassisNumber) {
        this.brand = brand;
        this.color = color;
        this.maxSpeed = maxSpeed;
        this.chassisNumber = chassisNumber;
    }
    //this feature
    drive() {
        console.log(`${this.brand} ${this.color} is driving!`)
    }

    reverse() {
        console.log(`${this.brand} ${this.color} is reverse!`)
    }

    turn() {
        console.log(`${this.brand} ${this.color} is turning`)
    }
}

const car1 = new Toyota('innova', 'silver', 2.5, 'IN-1')
const car2 = new Toyota('avanza', 'hitam', 2.0, 'AV-1')
const car3 = new Toyota('land cruiser', 'chrome', 3.0, 'LC-1')

console.log(car1);
console.log(car2);
console.log(car3);

car1.drive();
car2.reverse();
car3.turn();

//inheritance (pewarisan)
class Hewan {
    constructor(nama) {
        this.nama = nama;
    }

    bernapas() {
        console.log(`${this.nama} sedang bernapas`);
    }
}

class Mamalia extends Hewan {
    constructor(nama, jenisBulu) {
        super(nama);
        this.jenisBulu = jenisBulu;
    }

    menyusui() {
        console.log(`${this.nama} sedang menyusui anaknya`);
    }
}

const sapi = new Mamalia('sapi', 'bulu halus')
console.log(sapi)

sapi.bernapas();
sapi.menyusui();

//polymorphism (polimorfisme)

class Hewan {
    berbunyi() {
        console.log("Suara hewan generik");
    }
}

class Anjing extends Hewan {
    berbunyi() {
        console.log("Guk! Guk!");
    }
}

class Kucing extends Hewan {
    berbunyi() {
        console.log("Meow!");
    }
}

const anjing = new Anjing();
const kucing = new Kucing();

