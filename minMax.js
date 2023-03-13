function rps(s1, s2) {
  if (((s1 = "rock"), (s2 = "paper"))) {
    return console.log("Player 2 wins");
  } else if (((s2 = "rock"), (s1 = "paper"))) {
    return console.log("Player 1 wins");
  } else if (((s1 = "paper"), (s2 = "scissors"))) {
    return console.log("Player 2 wins");
  } else if (((s2 = "paper"), (s1 = "scissors"))) {
    return console.log("Player 1 wins");
  }

  if (s1 == s2) {
    return console.log("TIE");
  }
}
rps("rock", "paper");

rps("paper", "rock");

rps("paper", "scissors");

rps("scissors", "scissors");

rps("scissors", "paper");
