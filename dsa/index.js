const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    ['Neuer', 'Davies',  'Kimmich','Coman',  'Muller','Gnarby', 'Lewandowski','Pavard',  'Martinez','Alaba',  'Goretzka', ],
    ['Burki','Witsel','Sancho',  'Gotze','Brandt',  'Hazard','Schulz','Hakimi', 'Weigl','Hummels','Akanji',],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

for(const [i, player] of game.scored.entries()) {
   // console.log(`Goal ${i + 1}: ${player}`);
}

let average = 0;
for (const odd of Object.values(game.odds)) 
    average += odd;
    average /= Object.values(game.odds).length
  //  console.log(average);

for(const [team, odd] of Object.entries(game.odds)) {
    const teamStr = team === 'x'?'Draw':'Victory' + game[team];
    console.log(`Odd of ${teamStr} ${odd}`)
}