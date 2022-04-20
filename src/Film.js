import React from "react";
import './Film.css';
import Grid from "@mui/material/Grid";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import {Box, Button, Card, CardActions, CardContent, CardHeader, Typography} from "@mui/material";

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
            'original_language': this.props.object.original_language
       };
    }
    render() {
        return (
            <Grid item
                  key={this.state.original_title}
                  xs={12}
                  sm={this.state.original_title === 'Film' ? 12 : 6}
                  md={4}
            >
                <Card style={{ height: '80rem', textOverflow: "…", overflow: 'hidden'}}>
                    <CardHeader
                        title={this.state.original_title}
                        subheader={"Original language : " + this.state.original_language}
                        titleTypographyProps={{ align: 'center' }}
                        action={<FavoriteBorderIcon />}
                        subheaderTypographyProps={{
                            align: 'center',
                            color: 'blue'
                        }}
                        sx={{
                            backgroundColor: (theme) =>
                                theme.palette.mode === 'light'
                                    ? theme.palette.grey[200]
                                    : theme.palette.grey[700],
                        }}
                    />
                    <CardContent>
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'baseline',
                                mb: 2,
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
                    <CardActions>
                        <Button
                            fullWidth
                            variant={'outlined'}
                        >

                        </Button>
                    </CardActions>
                </Card>
            </Grid>

        );
    }
}
export default Film;