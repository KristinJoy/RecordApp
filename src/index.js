import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

<<<<<<< HEAD
// -------------------------------------------
// MAIN COMPONENT
// -------------------------------------------

class Card extends React.Component {
  render() {
    return(
      <div className='card-container'>
        <div className='card-body'>
          <CardBack />

          <CardFront />
        </div>
      </div>
=======
class App extends React.Component {
  render(){
    return(<Deck/>)
  }
}

class Deck extends React.Component {
  render(){
    let result = [];
    for (var i = 0; i < Data.records.length; i++) {
      result.push(<Card key={i} record={Data.records[i]}/>);
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
        <img className="image" src = {this.props.record.art} />
        <h3 className="title">{this.props.record.title}</h3>
        <ul className="album-info">
          <li>{this.props.record.artist}</li>
          <li>{this.props.record.genre}</li>
          <li>{this.props.record.label}</li>
          <li>{this.props.record.year}</li>
        </ul>

        <ol className="tracks">
          <li className="track">
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
>>>>>>> eb67c4d38f32ed6f41be2b311d6060e4d0855991
    )
  }
}

// -------------------------------------------
// FRONT SIDE
// -------------------------------------------
class CardFront extends React.Component {
  render() {
    return(
      <div className='card-side side-front'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-xs-6'>
              <img src='https://cdn.cidentertainment.com/wp-content/uploads/sites/14/2017/11/ODESZA_2018_Header.jpg' />
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
// BACK SIDE
// -------------------------------------------
class CardBack extends React.Component {
  render() {
    return(
      <div className='card-side side-back'>
        <div className='container-fluid'>
          <h1>Album Info</h1>
          <p>Put stuff here</p>
        </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Card />,
  document.getElementById('root')
);
