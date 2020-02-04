
  class Labtops {
    constructor(hddSize,ram,cpuSpeed,batteryLife,screenSize,model,manufacturer,price,os,serialNumber){
        this.hddSize = hddSize;
        this.ram = ram;
        this.cpuSpeed = cpuSpeed;
        this.batteryLife = batteryLife;
        this.screenSize = screenSize;
        this.model = model;
        this.manufacturer = manufacturer;
        this.price = price;
        this.os = os;
        this.serialNumber = this.serialNumber;
    }
    print() {
      alert(this.name);
    }
}
let labtop1 = new Labtops("Dell");
labtop1.print();

