import * as React from 'react';
import { Segment } from 'semantic-ui-react';

import Row from './Row';
import { StoneType } from './GameStore';

const styles = {
  rowsContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column' as 'column',
    height: '100%',
    width: '100%',
  },
};

const defaultBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

interface Props {
  board?: StoneType[][];
}

const renderRows = (board: StoneType[][]) =>
  board.map((row, i) => <Row columns={row} key={i} />);

const Board = ({ board = defaultBoard }: Props) => (
  <Segment className="board">
    <div style={styles.rowsContainer}>
      {renderRows(board)}
    </div>
  </Segment>
);

export default Board;
