import React from "react";
import './Film.css';

class Film extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            'original_title':this.props.object.original_title,
            'backdrop_path': this.props.object.backdrop_path,
            'popularity':this.props.object.popularity,
            'overview': this.props.object.overview,
            'release_date': this.props.object.release_date,
            'vote_average': this.props.object.vote_average
       };
    }
    render() {
        return (
            <div className = "Film">
                <h1> {this.state.original_title} </h1>
                <img src={ 'https://image.tmdb.org/t/p/w500'+ this.state.backdrop_path  }/>
                <di className={ "Contexte"}>
                    <h5> Popularity : {this.state.popularity} </h5>
                    <h5> {this.state.vote_average} / 10 - {this.state.release_date } </h5>
                    <p>{this.state.overview}</p>
                </di>
            </div>
        );}
}
export default Film;