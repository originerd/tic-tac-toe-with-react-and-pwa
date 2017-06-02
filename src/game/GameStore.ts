import { observable, IObservableArray } from 'mobx';

type StoneType = 'o' | 'x' | null;

class GameStore {
  public board: IObservableArray<StoneType[]> = observable([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
}

export default GameStore;
export {
  StoneType,
};
