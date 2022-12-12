class Greeter {
  private greeting: string;

  constructor(message: string) {
    this.greeting = message;
  }

  greet() {
    return "Hello, " + this.greeting;
  }
}
let newGreeter = new Greeter("how are you?");
console.log(newGreeter.greet());

class Animal {
  protected name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distanceInMeters: number = 0) {
    console.log(this.name + " moved " + distanceInMeters + " meters");
  }
}

class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }

  move(distanceInMeters?: number): void {
    super.move(distanceInMeters);
  }

  getName(): string {
    return "this is a " + this.name;
  }
}

let snake = new Snake("slithery boi");
snake.move(50);
console.log(snake.getName())
