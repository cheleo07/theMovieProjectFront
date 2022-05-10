import React from "react";
import './App.css';
import Film from './Film';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Rate from "./Rate";
import {Pagination, PaginationItem, Stack} from "@mui/material";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';



class App extends React.Component {

    // Constructor
    constructor(props) {
        super(props);

        this.state = {
            items: [],
            DataisLoaded: false,
            page: 1
        };

        this.handleChange = (event, value) => {
            this.setState({
                page: value
            });
        };

        this.getMovies = () => {
            const requestOptions = {
                method: 'GET',
                headers: { 'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000/',
                    'Access-Control-Allow-Credentials' : 'true'
                }
            };
            fetch(
                "http://localhost:3005/api/discover/movie/"+this.state.page, requestOptions)
                .then((res) => res.json())
                .then((json) => {
                    // console.log('json ', json)
                    this.setState({
                        items: json,
                        DataisLoaded: true
                    });
                })
        };
    }


    componentDidMount() {
        this.getMovies(this.state.page)
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.page !== this.state.page) {
            this.getMovies(this.state.page)
        }
    }

  render() {
    const { DataisLoaded, items } = this.state;
    console.log("items ", items)
    if (!DataisLoaded){
        return <div>
            <h1> Please wait some time.... </h1> </div> ;
    } else {
        return (
            <div className="App">
                <h1> Fetch data from an api in react </h1>
                Page : { items.page} <br/>

                <Rate
                Films={ items.results} />
                <div>
                    <Container maxWidth="md" component="main">
                        <Grid container spacing={8} >
                            {items.results.map(function (object) {
                                return <Film object={object}></Film>
                            })}
                        </Grid>
                        Total pages : { items.total_pages} <br/>
                    </Container>
                    <Stack spacing={2}>
                        <Pagination
                            count={items.total_pages}
                            color="secondary"
                            renderItem={(item) => (
                                <PaginationItem
                                    components={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                    {...item}
                                />
                            )}
                            onChange={this.handleChange}
                        />
                    </Stack>
                    Total pages : { items.total_pages}
                </div>
            </div>
        );
    }
  }
}

export default App;