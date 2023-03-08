const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// const player1 = game.players[0];
// console.log(player1);
// const player2 = game.players[1];
// console.log(player2);
// const gk = player1[0];
// console.log(gk);
// const fieldPlayers = player1.slice(1, 10);
// console.log(fieldPlayers);

// const subsPlayers = ["Thiagho", "Cotinho", "Perisic"];
// const player1Final = [player1, ...subsPlayers];
// console.log(player1Final);
const [players1, players2] = game.players;
console.log(players1, players2);

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

const player1Final = [...players1, "Thiago", "Continho", "Perisic"];
console.log(player1Final);
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

function printGoals(...players) {
  console.log(players);
  console.log(`${players.length} number of goal scored`);
}
printGoals(...game.scored);
