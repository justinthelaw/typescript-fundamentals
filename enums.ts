enum Colors {
  RED,
  BLUE,
  GREEN,
}

let myColor: Colors = Colors.BLUE;

enum Days {
  MONDAY,
  TUESDAY,
  WEDNESDAY,
  THURSDAY,
  FRIDAY,
  SATURDAY,
  SUNDAY,
}

const getDailyMessage = (day: Days) => {
  switch (day) {
    case Days.MONDAY:
      return "Get a coffee and get busy";
    case Days.FRIDAY:
      return "Get ready for the weekend";
  }
};

console.log(Days);
console.log(getDailyMessage(Days.MONDAY));
