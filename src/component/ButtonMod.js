import React from 'react';
import './ButtonMod.css';
import Comment from "./Comment";

class ButtonMod extends React.Component {

    constructor(props){
         super(props);
         this.state = {
             visible: false,
             idMovie: this.props.idMovie
         }
     this.showModal = this.showModal.bind(this);
     this.hideModal = this.hideModal.bind(this);
     }

    showModal = () => {
        console.log("Ouverture du modal");
        console.log("this.state.idMovie " + this.state.idMovie);

        this.setState({ visible: true }, () => {
            console.log("Après setState, this.state.visible:", this.state.visible);
            this.forceUpdate(); // ✅ Forcer React à re-render
        });
    };

    hideModal = () => {
        this.setState({
             visible:false
         })
     }

    render() {
        return (
            <div>
                <button onClick={this.showModal} id="comment"><span role="img">📨</span></button>
                <Comment visible={this.state.visible}
                         cache={this.hideModal}
                         idMovie={this.state.idMovie}
                />
            </div>
        )
    }
}
export default ButtonMod;

