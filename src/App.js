import './App.css';
import React, { Fragment } from 'react';
import TopBar from './TopBar';
import StoreListing from './StoreListing';

function App() {
  return (
    <Fragment>
    <TopBar></TopBar>
    <StoreListing></StoreListing>
    </Fragment>
  );
}

export default App;
