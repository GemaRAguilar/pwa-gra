import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import './css/style.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.

//serviceWorker.unregister();

// Para registrar nuestro serviceWorker cambiar por:

serviceWorker.register();
