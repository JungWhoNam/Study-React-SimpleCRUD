import React, { Component } from 'react';
import './App.css';
import Subject from './components/Subject';
import TOC from './components/TOC';
import Content from './components/Content';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Subject title="Web" sub="World Wide Web"></Subject>
        <TOC></TOC>
        <Content title="HTML" desc="HTML is..."></Content>
      </div>
    );
  }
}

export default App;
