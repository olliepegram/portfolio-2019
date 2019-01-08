import React, { Component } from 'react';
import Menu from './Menu';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Menu name={'Ollie Pegram'}/>
        <div className={'container-not'}>
          <div className={'box'}>
              <h1 className={'titleText'}>Front-end Developer</h1>
          </div>
          <div className={'box'}>
            <h2 className={'aboutText'}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
