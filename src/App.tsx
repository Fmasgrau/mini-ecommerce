import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import './App.css';
import Checkout from './pages/checkout/Checkout';

const App: React.FC = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/checkout" component={Checkout} />
    </Switch>
  </BrowserRouter>
);

export default App;
