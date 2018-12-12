import React, { Component } from 'react';

import { BrowserRouter, Route  } from "react-router-dom";
import {PersonagesListPage} from './routes/PersonagesListPage';
import {SinglePersonagePage} from './routes/SinglePersonagePage';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <BrowserRouter>
	          <div>
		          <Route path="/" component={PersonagesListPage} exact />
		          <Route path="/page/:page" component={PersonagesListPage} exact />
		          <Route path="/personage/:id" component={SinglePersonagePage} />
              </div>
          </BrowserRouter>
      </div>
    );
  }
}

export default App;
