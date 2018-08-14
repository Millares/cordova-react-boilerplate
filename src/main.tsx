import React from 'react';
import ReactDOM from 'react-dom';

import App from './containers/app.container';

document.addEventListener('deviceready', function () {
  ReactDOM.render(
    <App></App>,
    document.getElementById('app')
  );
}, false);
