import * as React from 'react';
import {
  Button,
  Icon,
} from 'semantic-ui-react';

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

interface IProps {
  stone: string;
}

const renderIcon = (stone: string) => {
  if (!stone) {
    return null;
  }

  const iconName = (stone === 'o') ? 'radio' : 'remove';

  return <Icon name={iconName} size="huge" style={styles.icon} />;
}

const Column = ({ stone }: IProps) => (
  <Button
    basic
    style={styles.container}
  >
    {renderIcon(stone)}
  </Button>
);

export default Column;
