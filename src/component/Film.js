import React from "react";
import './Film.css';
import Grid from "@mui/material/Grid";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Box, Card, CardContent, CardHeader, Typography} from "@mui/material";
import ButtonMod from "./ButtonMod";

class Film extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'original_title':this.props.object.original_title,
            'backdrop_path': this.props.object.backdrop_path,
            'popularity':this.props.object.popularity,
            'overview': this.props.object.overview,
            'release_date': this.props.object.release_date,
            'vote_average': this.props.object.vote_average,
            'original_language': this.props.object.original_language,
            'nb_likes': this.props.object.nb_likes,
            'id': this.props.object.id
       };

        this.likeMovie = () => {
            const requestOptions = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000/',
                    'Access-Control-Allow-Credentials' : 'true'
                }
            };
            fetch(
                "http://localhost:3005/api/like/"+this.state.id, requestOptions)
                .then((res) => res.json())
                .then((json) => {
                    this.setState({
                        'nb_likes': json.nb_likes
                    });
                })
        };

    }



    render() {
        return (
            <Grid item
                  key={this.state.original_title}
                  xs={12}
                  sm={this.state.original_title === 'Film' ? 12 : 6}
            >

                <Card style={{ height: '55rem', textOverflow: "…", overflow: 'hidden', backgroundColor:  'darkgrey', justifyContent:'fit-content'}}>
                    <CardHeader
                        title={this.state.original_title}
                        subheader={"Nombre de likes : " + this.state.nb_likes}
                        titleTypographyProps={{ align: 'center', color: 'white'}}
                        action={<button id="like-button">
                            <FavoriteBorderIcon onClick={this.likeMovie}/>
                        </button>}
                        subheaderTypographyProps={{
                            align: 'center',
                            color: 'whitesmoke'
                        }}
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'black'
                                    ? theme.palette.grey[200]
                                    : theme.palette.grey[700]
                        }}
                    />

                    <CardContent>
                        <div className="commentSection">
                            <ButtonMod idMovie={this.state.id}/>
                        </div>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'baseline',
                                mb: 2
                            }}
                        >
                            <Typography component="h2" variant="h3" color="text.primary">
                                <img src={"https://image.tmdb.org/t/p/w500"+this.state.backdrop_path} alt={"Not found"}/>
                            </Typography>
                        </Box>
                        <Typography
                            variant="subtitle1"
                            align="center"
                            textAlign={"justify"}
                        >
                            {this.state.overview}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
        )
    }
}
export default Film;


