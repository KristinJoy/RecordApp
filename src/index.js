import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Data from './records.json';

// -------------------------------------------
// App Component
// -------------------------------------------
class App extends React.Component {
  render() {
    return(
      <div>
        <Header/>
        <Deck/>
      </div>
    )
  }
}

// -------------------------------------------
// Header Component
// -------------------------------------------

// Create a responsive, non-rectangular header (SVG trapezoidal header)

class Header extends React.Component {
  render() {
    return(
      <div className='sticky-header'>
        <h1>RECORD TIME!</h1>
      </div>
    )
  }
}

// -------------------------------------------
// Deck Component to parse through JSON
// -------------------------------------------

class Deck extends React.Component {
  render() {
      let result = [];
      for (var i = 0; i < Data.records.length; i++) {
        result.push(<Card record={Data.records[i]}/>);
      }
      return(result)
  }
}

// -------------------------------------------
// Main Component
// -------------------------------------------

class Card extends React.Component {
  render() {
    return(
      <div className='card-container'>
        <div className='card-body'>
          <CardBack record={this.props.record} />


          <CardFront record={this.props.record} />
        </div>
      </div>
    )
  }
}

// -------------------------------------------
// Front Side Component
// -------------------------------------------
class CardFront extends React.Component {
  render() {
    return(
      <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xs-6'>
              <img className="image" src={this.props.record.art}/>
            </div>
              <div className='col-xs-6 side-front-content'>

            </div>
          </div>
        </div>
      </div>
    )
  }
}

// -------------------------------------------
// Back Side Component
// -------------------------------------------
class CardBack extends React.Component {
  render() {
    return(
      <div className='card-side side-back'>
        <div className='container-fluid'>
          <h3 className="title">{this.props.record.title}</h3>
            <ul className="album-info">
              <li><strong>Artist: </strong> {this.props.record.artist}</li>
              <li><strong>Record Label: </strong>{this.props.record.label}</li>
              <li><strong>Year: </strong>{this.props.record.year}</li>
              <li><strong>Genre: </strong>{this.props.record.genre}</li>
            </ul>
            <ul className="track-info">
              <li><strong>Track Name: </strong>{this.props.record.tracks.title}</li>
              <li><strong>Duration: </strong>{this.props.record.tracks.duration}</li>
              <li><strong>BPM: </strong>{this.props.record.tracks.bpm}</li>
              <li><strong>Key: </strong>{this.props.record.tracks.key}</li>
              <li><strong>Composer: </strong>{this.props.record.tracks.composer}</li>
            </ul>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
