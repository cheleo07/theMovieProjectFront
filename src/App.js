import React from "react";
import './App.css';
import Film from './component/Film';
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
                // console.log('json ', json)
                this.setState({
                    items: json,
                    DataisLoaded: true
                });
            })
    }

  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded){
        return <div>
            <h1> Please wait some time.... </h1> </div> ;
    } else {
        return (
            <div className="App">
                Page : { items.page} <br/>

                <div>
                    <Container maxWidth="md" component="main">
                        <Grid container spacing={8} >
                            {items.results.map((object,keyItem) => {
                                return <Film key={keyItem} object={object}/>
                            })}
                        </Grid>
                        Total pages : { items.total_pages} <br/>
                    </Container>
                </div>
            </div>
        );
    }
  }
}

export default App;