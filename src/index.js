import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import login from './components/login';

ReactDOM.render(
  <Router>
        <div className="container">     
        
       <div>
       <div className="jumbotron center">HOLAAAAA</div>
       
       </div>
            <Route path='/login' component={login} />         
            <div>
                <p className="footer-center">holaaaa <a href="https://google.com/">Holaaa</a></p>
            </div>

        </div>
    </Router>,
    document.getElementById('root')
  );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA

//serviceWorker.unregister();

// Para registrar nuestro serviceWorker cambiar por:
serviceWorker.register();
