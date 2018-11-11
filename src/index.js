import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import axios from 'axios';




// -------------------------------------------
// App Component
// -------------------------------------------
class App extends React.Component {
  constructor(){
    super()
    this.state={
      data: "",
      ready:false
    }
  }

  componentDidMount(){
    axios.get('http://localhost:3000/get').then(res=>{
      this.setState({
        data:res.data,
        ready:true
      });
    });
  }

  render() {
    if (this.state.ready) {
      return(
          <div>
            <Header/>
            <div className='box'>
              <Deck data={this.state.data}/>
            </div>
          </div>
      )
    } else {
      return(<div>Loading...</div>)
    }

  }

}

// -------------------------------------------
// Header Component
// -------------------------------------------

// Create a responsive, non-rectangular header (SVG trapezoidal header)

class Header extends React.Component {
  render() {
    return(
      <div className='svg-header'>
        <h1>SPiN DOC</h1>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon
            fill="#cfd8dc"
            points="0,100 100,0 100,100"
            />
          </svg>
      </div>
    )
  }
}

// -------------------------------------------
// Deck Component to parse through JSON
// -------------------------------------------

class Deck extends React.Component {
  constructor(){
    super()
    // this.state
  }
  render() {
    let result = [];
    for (var i = 0; i < this.props.data.length; i++) {
      result.push(<Card record={this.props.data[i]}/>)
    }
    result.push(<CreateCard/>);
    return result;
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

//--------------------------------
// Blank Add Card
//-------------------------------

class CreateCard extends React.Component {
  render() {
    return(
        <div className='card-container2'>
          <div className='card-body'>

            <div className='card-side side-front'>
              <div className='container-fluid'>
                <div className='row'>
                  <div className='col-xs-6'>
                    <form className="form">
                    <label>
                    Artist:
                    <input type="text" name="Artist" />
                    </label>
                    <label>
                    Album:
                    <input type="text" name="Album" />
                    </label>
                    <label>
                    Label:
                    <input type="text" name="Tracks" />
                    </label>
                    <label>
                    Year:
                    <input type="text" name="Tracks" />
                    </label>
                    <label>
                    Tracks:
                    <input type="text" name="Tracks" />
                    </label>
                    <input type="submit" value="Submit" />
                    </form>
                  </div>
                  <div className='col-xs-6 side-front-content'>


                  </div>
                </div>
              </div>
            </div>
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
