import { Provider } from 'mobx-react';
import * as React from 'react';

import BoardContainer from '../game/BoardContainer';
import stores from '../stores';

const App = () => (
  <Provider {...stores}>
    <BoardContainer />
  </Provider>
);

export default App;
