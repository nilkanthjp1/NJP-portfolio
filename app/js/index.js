'use strict';

import React     from 'react';
import ReactDOM  from 'react-dom';

import Routes    from './Routes';

if ( process.env.NODE_ENV !== 'production' ) {
  window.React = React;
}

ReactDOM.render(Routes, document.getElementById('app'));
