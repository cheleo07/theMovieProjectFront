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
                        subheader={"Langue d'origine : " + this.state.original_language}
                        titleTypographyProps={{ align: 'center', color: 'white'}}
                        action={<button id="like-button">
                            <FavoriteBorderIcon/>
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
                        <ButtonMod/>
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


