import * as React from 'react';
import {
  Button,
  Icon,
} from 'semantic-ui-react';

import { StoneType } from './GameStore';

const styles = {
  container: {
    alignItems: 'center' as 'center',
    display: 'flex',
    flex: 1,
    justifyContent: 'center' as 'center',
    margin: 0,
  },
  icon: {
    margin: 0,
  },
};

interface Props {
  stone: StoneType;
}

const renderIcon = (stone: StoneType) => {
  if (!stone) {
    return null;
  }

  const iconName = (stone === 'o') ? 'radio' : 'remove';

  return <Icon name={iconName} size="huge" style={styles.icon} />;
};

const Column = ({ stone }: Props) => (
  <Button
    basic={true}
    style={styles.container}
  >
    {renderIcon(stone)}
  </Button>
);

export default Column;
