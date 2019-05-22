class Plane {
    constructor(numEngines) {
      this.numEngines = numEngines;
      this.enginesActive = false;
    }

    //Static methods, like any other language
    static badWeather(planes) {
        for (let p of planes) {
          p.enginesActive = false;
        }
    }
  
    startEngines() {
      console.log('starting engines…');
      this.enginesActive = true;
    }

    printNumberOfEngines(){
        console.log(`The number of engines are: ${this.numEngines}`);
    }
}

// let richardPlane = new Plane(3);
// richardPlane.startEngines();
// richardPlane.printNumberOfEngines();
// console.log(typeof Plane);
// console.log(richardPlane.enginesActive);
// Plane.badWeather([richardPlane]);
// console.log(richardPlane.enginesActive);
// const myMaple = new Maple(15, 5);

class Tree {
    constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
      this.size = size;
      this.leaves = leaves;
      this.leafColor = null;
    }
  
    changeSeason(season) {
      this.leafColor = this.leaves[season];
      if (season === 'spring') {
        this.size += 1;
      }
    }
  }
  
  class Maple extends Tree {
    constructor(syrupQty = 15, size, leaves) {
      super(size, leaves);
      this.syrupQty = syrupQty;
    }
  
    changeSeason(season) {
      super.changeSeason(season);
      if (season === 'spring') {
        this.syrupQty += 1;
      }
    }
  
    gatherSyrup() {
      this.syrupQty -= 3;
    }

    printSize(){
      console.log(`Size: ${this.size}`);
    }
  }
  
// myMaple.printSize();
// myMaple.changeSeason('fall');
// myMaple.gatherSyrup();
// myMaple.changeSeason('spring');

class Vehicle {
  constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
    this.color = color;
    this.wheels = wheels;
    this.horn = horn;
  }
  
  honkHorn() {
    console.log(this.horn);
  }
}

class Bicycle extends Vehicle{
  constructor(color, wheels = 2, horn='honk honk'){
    super(color);
    this.wheels = wheels;
    this.horn = horn;
  }
}

const myVehicle = new Vehicle();
myVehicle.honkHorn(); // beep beep
const myBike = new Bicycle();
myBike.honkHorn(); // honk honk