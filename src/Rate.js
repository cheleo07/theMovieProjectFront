import React from "react";
import "./header.css";

class Rate extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            'films': this.props.Films
        }
    }

    componentDidMount() {
        console.log("films rate : ", this.state.films);
    }

    render() {

        return(
            <div className= "form-component">
                <div className="form-container">
                    <form>
                        <input
                            type="text"
                            placeholder="Entrez le titre d'un film"
                            id="search-input"
                            //onChange={(e) => setSearch(e.target.value)}
                        />
                        <input className="btn-sort" type="submit" value="Rechercher" />
                    </form>
                    <div className="btn-sort" style={{backgroundColor: 'white'}}></div>

                    <div className="btn-sort" id="goodToBad"> Top <span>☀</span></div>
                    <div className="btn-sort" style={{backgroundColor: 'white'}}></div>
                    <div className="btn-sort" id="badToGood"> Flop <span>☂</span></div>
                </div>
            </div>
        );
    }


};

export  default Rate;