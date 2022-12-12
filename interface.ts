interface PersonState {
  name: String;
  isHungry: boolean;
  children?: string[];
}

const showState = (person: PersonState) => {
  return person.name + (person.isHungry ? " is hungry!" : " is not hungry!");
};

let anakin: PersonState = {
  name: "Anakin Skywalker",
  isHungry: true,
};

console.log(showState(anakin));

let anakinNotWalker = {
  name: "Anakin Notwalker",
  isHungry: false,
  children: ["Luke", "Leah"],
};

console.log(showState(anakinNotWalker));
