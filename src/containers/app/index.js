import React from 'react';
import { Route } from 'react-router-dom'
import Home from '../home'
import Map from '../map'

const App = () => (
  <div>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/map" component={Map} />
    </main>
  </div>
)

export default App
