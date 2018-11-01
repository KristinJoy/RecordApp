import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// -------------------------------------------
// Main Component (Card Container; Card Body)
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
// Back Side Component
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
