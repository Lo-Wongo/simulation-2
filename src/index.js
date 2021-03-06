import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter } from "react-router-dom";
import store from './store';
import { Provider } from "react-redux";
import routes from './routes/routes';

ReactDOM.render(
    <BrowserRouter>
      <Provider store={ store }>
        { routes }
      </Provider>
    </BrowserRouter>,
     document.getElementById('root')
  );
  
  registerServiceWorker();
  