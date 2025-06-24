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

const [players1, players2] = game.players;
const [gk, ...fieldplayers] = players1;
const allPlayers = [...players1, ...players2];

const players1final = [...players1, 'Thiago', 'Coutino','Perisic'];

// Both statements are same below
// const {team1, draw, team2} = game.odds;
const {odds: {team1, x: draw, team2}} = game;
//console.log(team1, draw, team2);

const printGoals = function(...players) {
    console.log(`${players.length} goals were scored.`)
}

printGoals('Davis', 'Muller','Lewando','Kimmich')
printGoals('Davis', 'Muller')
printGoals(...game.scored);
team1 < team2 && console.log('Team 1 is more likely to win') 
team1 > team2 && console.log('Team 2 is more likely to win') 