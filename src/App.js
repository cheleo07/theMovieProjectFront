import React from "react";
import './App.css';
import Film from './Film';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';

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
                'Access-Control-Allow-Origin': 'http://localhost:3000/',
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
    if (!DataisLoaded){
        return <div>
            <h1> Please wait some time.... </h1> </div> ;
    } else {
        return (
            <div className = "App">
              <h1> Fetch data from an api in react </h1>
                Page : { items.page} <br/>
                <Container maxWidth="md" component="main">
                    <Grid container spacing={5} >
                        {items.results.map(function (object) {
                            return <Film object={object}></Film>
                        })}
                    </Grid>
                </Container>
                Total pages : { items.total_pages} <br/>
            </div>
        );
    }
  }
}

export default App;