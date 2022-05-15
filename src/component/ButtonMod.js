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
         this.setState({
             visible:true
         })
     }

     hideModal = () => {
        this.setState({
             visible:false
         })
     }

    render() {
        return (
            <div>
                <button onClick={this.showModal} id="comment"><span>✉</span></button>
                <Comment visible={this.state.visible}
                         cache={this.hideModal}
                         idMovie={this.state.idMovie}
                />
            </div>
        )
    }
}
export default ButtonMod;

