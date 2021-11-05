//import React from 'react';
//import ReactDOM from 'react-dom';

//import './index.css';
//import App from './App';
//import reportWebVitals from './reportWebVitals';
//const myFirstElement = <h1>does this work</h1>

//PowerButton
class PowerButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        power: true,
        color: "blue",
        volume: 1
    }
    this.powerButtonClick = this.powerButtonClick.bind(this);
  }
  powerButtonClick (event){
    if(this.state.power){
      this.setState((state, props) => ({
        power: false,
        color: "red",
        volume: 0
      }));
    } else {
      this.setState((state, props) => ({
        power: true,
        color: "blue",
        //change volume when redux is set up
        volume: 1
      }));
    }
  }
  render() {
    //const category = this.props.category;
    return (
      <div id="powerSection" style={{backgroundColor: this.state.color}} onClick={this.powerButtonClick}>
          <p id="powerLabel" style={{backgroundColor: this.state.color}}>Power &nbsp;</p>                              
      </div>

    );
  }
}

class VolumeDisplay extends React.Component {
  render() {
    const volumeNumber = this.props.volume;
    return (
      <div>Volume:&nbsp;{volumeNumber}</div>
    );
  }
}

class InstrumentDisplay extends React.Component {
  render() {
    const instrumentInUse = this.props.instrument;
    return (
      <div>{instrumentInUse}</div>
    );
  }
}

class NoteDisplay extends React.Component {
  render() {
    const notePlayed = this.props.note;
    return (
      <div>{notePlayed}</div>
    );
  }
}

class VolumeControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        volumeLevel: 0.5, 
        volumeDisplay: 50
    }
    this.setVolume = this.setVolume.bind(this);
  }
  setVolume (event){
    this.setState((state, props) => ({
        volumeLevel: event.target.value / 100,
        volumeDisplay: event.target.value
    }));
  }
  render () {
    return (
      <input id="volumeControl" type="range" min="0" max="100" step="1" onInput={this.setVolume} onChange={this.setVolume}></input>
    );
  }
}



ReactDOM.render(<PowerButton/>,
  document.getElementById('drumMachineBody')
);

/*
const domContainer = document.querySelector('#drumMachineBody');
ReactDOM.render(<PowerButton />), domContainer);
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
