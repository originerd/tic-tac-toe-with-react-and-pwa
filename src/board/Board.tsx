import * as React from 'react';
import { Segment } from 'semantic-ui-react';

import Row from './Row';

const styles = {
  rowsContainer: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column' as 'column',
    height: '100%',
    width: '100%',
  },
};

const board = [
  new Array(3).fill(undefined),
  new Array(3).fill(undefined),
  new Array(3).fill(undefined),
];

const rows = board.map((row, i) => <Row columns={row} key={i} />);

const Board = () => (
  <Segment className="board">
    <div style={styles.rowsContainer}>
      {rows}
    </div>
  </Segment>
);

export default Board;
