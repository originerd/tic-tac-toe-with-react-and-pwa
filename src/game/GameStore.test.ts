import GameStore from './GameStore';

describe('constructor()', () => {
  it('initializes with default values', () => {
    // When
    const gameStore = new GameStore();

    // Then
    expect(String(gameStore.board)).toEqual(String([
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ]));
  });
});
