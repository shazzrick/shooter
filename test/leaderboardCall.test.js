import { submitHighScore, createGame } from '../src/API/leaderboardCall';
import 'regenerator-runtime/runtime';

it('Add a mock game and receive a message with the id', async () => {
  fetch.mockResponseOnce(JSON.stringify({ result: 'Game with ID: added' }));

  const result1 = await createGame();
  expect(result1.result).toMatch(/(Game with ID).*(added)/);
});

it('catches API request errors', async () => {
  fetch.mockReject(() => 'Error Message');
  const result1 = await createGame();

  expect(result1).toEqual(Error('API is down'));
});

it('Add a record to leaderboard', async () => {
  fetch.mockResponseOnce(JSON.stringify({ result: 'Leaderboard score created correctly.' }));

  const user = 'UserName';
  const score = 5000;
  const result2 = await submitHighScore(user, score);
  expect(result2.result).toBe('Leaderboard score created correctly.');
});