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
let gameScore = game.scored.entries();
console.log(gameScore);
for (const [i, players] of gameScore) {
  console.log(`Goal ${i + 1} scored ${players}`);
}
let z = 0;
let valuess = Object.values(game.odds);
console.log(valuess);
for (x of valuess) z += x;
z /= valuess.length;
console.log(z);

const odds = Object.entries(game.odds);
for (const [team, odd] of odds) {
  const teamStr = team === "x" ? "draw" : ` victory ${game[team]}`;
  console.log(`Odd of ${teamStr} ${odd}`);
}
