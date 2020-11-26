class Animal {
  constructor(name) {
      this.name = name;
  }
  speak() {
      console.log(this.name, 'speaks.');
  }
}

class Dog extends Animal {
  speak() {
      super.speak();
      console.log(this.name, 'barks.');
  }
}

let spot = new Dog('Spot');
spot.speak();