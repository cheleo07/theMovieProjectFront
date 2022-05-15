import React from 'react';

class CommentPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            'original_title':this.props.object.original_title,
            'nb_likes': this.props.object.nb_likes,
            'pseudo': this.props.object.pseudo,
            'review': this.props.object.review,
            'rate':this.props.object.rate
        }

    }

    render() {
        return (
            <div className="filmContainer">
                <p>testetstetstetst</p>
                <h4> {this.state.original_title } </h4>
                <h6> Nombre de likes : { this.state.nb_likes }</h6>
                <h6> Ce commentaire a été rédigé par { this.state.pseudo } qui a attribué une note de {this.state.rate} /20 </h6>
                <p> {this.state.review} </p>
            </div>
        )
    }
}

export default CommentPage;
