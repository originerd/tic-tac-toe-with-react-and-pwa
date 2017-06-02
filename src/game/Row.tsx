import * as React from 'react';

import Column from './Column';

const styles = {
  columnContainer: {
    display: 'flex',
    flex: 1,
  },
  container: {
    display: 'flex',
    flex: 1,
  },
};

interface IProps {
  columns: string[];
}

const renderColumns = (columns: string[]) =>
  columns.map((column, i) => (
    <div key={i} style={styles.columnContainer}>
      <Column stone={column} />
    </div>
  ));

const Row = ({ columns }: IProps) => (
  <div style={styles.container}>
    {renderColumns(columns)}
  </div>
);

export default Row;
