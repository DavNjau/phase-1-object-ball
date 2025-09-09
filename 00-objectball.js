function gameObject() {
  return {
    "home": {
      "teamName": "Brooklyn Nets",
      "colors": ["Black", "White"],
      "players": {
        "Alan Anderson": {
          "number": 0,
          "shoe": 16,
          "points": 22,
          "rebounds": 12,
          "assists": 12,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 1
        },
        "Reggie Evans": {
          "number": 30,
          "shoe": 14,
          "points": 12,
          "rebounds": 12,
          "assists": 12,
          "steals": 12,
          "blocks": 12,
          "slamDunks": 7
        },
        "Brook Lopez": {
          "number": 11,
          "shoe": 17,
          "points": 17,
          "rebounds": 19,
          "assists": 10,
          "steals": 3,
          "blocks": 1,
          "slamDunks": 15
        },
        "Mason Plumlee": {
          "number": 1,
          "shoe": 19,
          "points": 26,
          "rebounds": 12,
          "assists": 6,
          "steals": 3,
          "blocks": 8,
          "slamDunks": 5
        },
        "Jason Terry": {
          "number": 31,
          "shoe": 15,
          "points": 19,
          "rebounds": 2,
          "assists": 2,
          "steals": 4,
          "blocks": 11,
          "slamDunks": 1
        }
      }
    },
    "away": {
      "teamName": "Charlotte Hornets",
      "colors": ["Turquoise", "Purple"],
      "players": {
        "Jeff Adrien": {
          "number": 4,
          "shoe": 18,
          "points": 10,
          "rebounds": 1,
          "assists": 1,
          "steals": 2,
          "blocks": 7,
          "slamDunks": 2
        },
        "Bismak Biyombo": {
          "number": 0,
          "shoe": 16,
          "points": 12,
          "rebounds": 4,
          "assists": 7,
          "steals": 7,
          "blocks": 15,
          "slamDunks": 10
        },
        "DeSagna Diop": {
          "number": 2,
          "shoe": 14,
          "points": 24,
          "rebounds": 12,
          "assists": 12,
          "steals": 4,
          "blocks": 5,
          "slamDunks": 5
        },
        "Ben Gordon": {
          "number": 8,
          "shoe": 15,
          "points": 33,
          "rebounds": 3,
          "assists": 2,
          "steals": 1,
          "blocks": 1,
          "slamDunks": 0
        },
        "Brendan Haywood": {
          "number": 33,
          "shoe": 15,
          "points": 6,
          "rebounds": 12,
          "assists": 12,
          "steals": 22,
          "blocks": 5,
          "slamDunks": 12
        }
      }
    }
  }
}

const homeTeamName = () => {
    let object = gameObject()
    return object["home"]["teamName"]
}

const numPointsScored = () => {
    let object = gameObject()
    const homeP =  object.home.players
    const awayP = object.away.players

    for(const player in homeP) {
        console.log(`${player}: ${homeP[player].points}`)
    }
    for(const player in awayP) {
        console.log(`${player}: ${awayP[player].points} `)
    }
}

const shoeSize = () => {
  let object = gameObject();

  const homeTeamName = object.home.teamName;
  const awayTeamName = object.away.teamName;

  const homePlayers = object.home.players;
  const awayPlayers = object.away.players;

  console.log(`${homeTeamName} players' shoe sizes:`);
  for (const player in homePlayers) {
    console.log(`${player}: ${homePlayers[player].shoe}`);
  }

  console.log(`${awayTeamName} players' shoe sizes:`);
  for (const player in awayPlayers) {
    console.log(`${player}: ${awayPlayers[player].shoe}`);
  }
};

const teamColors = () => {
    let object = gameObject();

    const homeT = object.home.teamName;
    const awayT = object.away.teamName;
    const homeColors = object.home.colors;
    const awayColors = object.away.colors;

    console.log(`${homeT}: ${homeColors}`);
    console.log(`${awayT}: ${awayColors}`);
};

console.log(teamColors("Brooklyn Nets"))


const teamNames = () => {
  let object = gameObject();

  const homeTName = object.home.teamName;
  const awayTName = object.away.teamName;

  const teams = [homeTName, awayTName];

  return teams;
};

const playerNumbers = (teamName) => {
  let object = gameObject();

  const homeTName = object.home.teamName;
  const awayTName = object.away.teamName;

  let players;
  if (teamName === homeTName) {
    players = object.home.players;
  } else if (teamName === awayTName) {
    players = object.away.players;
  } else {
    return [];
  }

  let numbers = [];
  for (const player in players) {
    numbers.push(players[player].number);
  }

  return numbers;
};

const playerStats = (playerName) => {
  let object = gameObject();

  const homePlayers = object.home.players;
  const awayPlayers = object.away.players;

  if (playerName in homePlayers) {
    return homePlayers[playerName];
  } else if (playerName in awayPlayers) {
    return awayPlayers[playerName];
  } else {
    return null;
  }
};

const bigShoeRebounds = () => {
  let object = gameObject();
  let biggestShoe = 0;
  let rebounds = 0;

  const homePlayers = object.home.players;
  const awayPlayers = object.away.players;

  for (const player in homePlayers) {
    if (homePlayers[player].shoe > biggestShoe) {
      biggestShoe = homePlayers[player].shoe;
      rebounds = homePlayers[player].rebounds;
    }
  }

  for (const player in awayPlayers) {
    if (awayPlayers[player].shoe > biggestShoe) {
      biggestShoe = awayPlayers[player].shoe;
      rebounds = awayPlayers[player].rebounds;
    }
  }

  return rebounds;
};











