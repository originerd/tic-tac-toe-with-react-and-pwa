import GameStore from './game/GameStore';

interface Stores {
  gameStore: GameStore;
}

const gameStore = new GameStore();

export default { gameStore };

export { Stores };
