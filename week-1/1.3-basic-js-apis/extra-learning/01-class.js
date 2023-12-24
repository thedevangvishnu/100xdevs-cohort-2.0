// Practice defining classes and create multiple instances of that class
// Write a program that creates a class of player having a name and team and also a greeting message.

class Player {
  constructor(name, team) {
    this.name = name;
    this.team = team;
  }

  greet() {
    console.log(
      `My name is ${this.name} and I'm a member of ${this.team} team.`
    );
  }
}

const micheal = new Player("Micheal", "Alpha");
const andy = new Player("Andy", "Delta");

micheal.greet(); // My name is Micheal and I'm a member of Alpha team.
andy.greet(); // My name is Andy and I'm a member of Delta team.

// Now create a new Leader class that extends Player and also has a leader id and a command-message for all players depending upon which team they are a member of.

class Leader extends Player {
  constructor(name, leaderId, command, teamName) {
    super(name);
    this.leaderId = leaderId;
    this.command = command;
    this.teamName = teamName;
  }

  greet() {
    console.log(
      `My name is ${this.name} and I'm your leader. All of you must obey my orders!`
    );
  }

  order() {
    console.log(
      `This is a message from ${this.leaderId}: ${this.teamName} team, ${this.command}!`
    );
  }
}

const washburn = new Leader("Washburn", 9090, "Fall back", "Alpha");
console.log(washburn.name); // Washburn
washburn.greet(); // My name is Washburn and all of you must obey my orders!
washburn.order(); // This is a message from 9090: Alpha team, Fall back!
