import * as React from 'react';
import * as ReactDOM from 'react-dom';

import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

import '../node_modules/semantic-ui-css/semantic.min.css';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
