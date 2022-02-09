export interface Prototype {
  clone(): Prototype;
}

export class Address {
  constructor(public street: string, public number: number) {}
}

export class Person implements Prototype {
  public addresses: Address[] = [];
  constructor(public name: string, public age: number) {}
  clone(): this {
    const newObj = Object.create(this);
    return newObj;
  }

  addAdreess(address: Address): void {
    this.addresses.push(address);
  }
}

const address1 = new Address('Av Brasil', 15);

const person1 = new Person('Luiz', 30);
person1.addAdreess(address1);
const person2 = person1.clone();

person2.name = 'Person2';
console.log(person2);
console.log(person2.name, person2.age);
console.log(person2.addresses);
