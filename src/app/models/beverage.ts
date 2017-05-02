export class Beverage {
  
  id: number;
  type: number;
  volume: number;
  name: string;
  company: string;
  price: number;

  constructor(id, type, volume, name, company, price) {
    
    this.id = id;
    this.type = type;
    this.volume = volume;
    this.name = name;
    this.company = company;
    this.price = price;
  }
}
