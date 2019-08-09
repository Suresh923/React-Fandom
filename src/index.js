import React from 'react';
import ReactDOM from 'react-dom';
import Location from './files/file';


import * as serviceWorker from './serviceWorker';
import  'react-bootstrap';





ReactDOM.render(<Location/>, document.getElementById('root'));


serviceWorker.unregister();
