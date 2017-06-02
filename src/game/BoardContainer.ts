import { inject, observer } from 'mobx-react';

import { Stores } from '../stores';
import Board from './Board';

export default inject((stores: Stores) => ({
  board: stores.gameStore.board,
}))(observer(Board));
