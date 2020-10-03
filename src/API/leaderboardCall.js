async function createGame() {
  const game = {
    name: 'TennyZvaita Space Shooter',
  };
  const post = JSON.stringify(game);
  const address = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: post,
  };
  try {
    const response = await fetch(address, settings);

    if (response.ok) {
      const answer = await response.json();
      return answer;
    }
    throw new Error('API is down');
  } catch (error) {
    return error;
  }
}

async function submitHighScore(userName, scoreValue) {
  const submit = {
    user: userName,
    score: scoreValue,
  };
  const post = JSON.stringify(submit);
  const address = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WtKT7KZX1bi9BCfM1277/scores/';
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: post,
  };
  try {
    const response = await fetch(address, settings);

    if (response.ok) {
      const answer = await response.json();
      return answer;
    }
    throw new Error('Request failed');
  } catch (error) {
    return error;
  }
}

function sorting(obj) {
  const array = [];
  for (let i = 0; i < obj.length; i += 1) {
    array.push([obj[i].score, obj[i].user]);
  }
  return Array.from(array).sort((a, b) => b[0] - a[0]);
}

async function getScoreBoard() {
  const address = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/WtKT7KZX1bi9BCfM1277/scores/';
  const settings = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  try {
    const response = await fetch(address, settings);

    if (response.ok) {
      const answer = await response.json();
      return sorting(answer.result);
    }
    throw new Error('Request failed');
  } catch (error) {
    return error;
  }
}

export {
  submitHighScore, getScoreBoard, createGame,
};