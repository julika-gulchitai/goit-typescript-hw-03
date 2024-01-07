class Key {
  private readonly signature: number = Math.random();
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  protected door: boolean = false;
  constructor(protected key: Key) {}
  comeIn(guest: Person): void {
    if (this.door) {
      this.tenants.push(guest);
    }
  }
  abstract openDoor(myKey: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
    }
    this.door = false;
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
