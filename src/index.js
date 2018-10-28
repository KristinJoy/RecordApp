import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Data from './records.json';

class App extends React.Component {
  render(){
    return(<Deck/>)
  }
}

class Deck extends React.Component {
  render(){
    let result = [];
    for (var i = 0; i < Data.records.length; i++) {
      result.push(<Card record={Data.records[i]}/>);
    }
    return(result)
  }
}

class Card extends React.Component {
  constructor(){
    super()
  }
  render(){
    console.log(this.props.record);
    return(
      <div className="flex-container">
        <div className="card">
          <h3 className="title">{this.props.record.title}</h3>
            <ul className="album-info">
              <li>{this.props.record.artist}</li>
              <li>{this.props.record.genre}</li>
              <li>{this.props.record.label}</li>
              <li>{this.props.record.year}</li>
            </ul>
            <ol className="tracks">
              <li>
                <ul className="track-info">
                  <li>{this.props.record.title}</li>
                  <li>{this.props.record.duration}</li>
                  <li>{this.props.record.bpm}</li>
                  <li>{this.props.record.key}</li>
                  <li>{this.props.record.composer}</li>
                </ul>
              </li>
            </ol>
          </div>
      </div>
    ) //render page
  }
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
);
