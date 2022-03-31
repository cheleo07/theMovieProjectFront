import React from "react";
import './App.css';
class App extends React.Component {

  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false
    };
  }

  // ComponentDidMount is used to
  // execute the code
  componentDidMount() {
      const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json',
                     'Access-Control-Allow-Origin': 'http://localhost:3000',
              'Access-Control-Allow-Credentials' : 'true'
          }
      };
    fetch(
        "http://localhost:3005/api/discover/movie", requestOptions)
        .then((res) => res.json())
        .then((json) => {
            console.log('json ', json)
          this.setState({
            items: json,
            DataisLoaded: true
          });
        })
  }
  render() {
    const { DataisLoaded, items } = this.state;
    console.log("items ", items)
    /*if (!DataisLoaded) return <div>
      <h1> Pleses wait some time.... </h1> </div> ;*/

    return (
        <div className = "App">
          <h1> Fetch data from an api in react </h1>
            Page : { items.page}
            Total pages : { items.total_pages}
        </div>
    );
  }
}

export default App;


/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;*/

/*
* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
* */