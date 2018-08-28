import React from 'react';
import { render } from 'react-dom';

//Files
import FantasyBooks from FantasyBooks.jsx;

const MainApp = () => (
  <FantasyBooks />
);

render(<App />, document.getElementById('app'));