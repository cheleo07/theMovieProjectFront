import React from 'react';
import './ButtonMod.css';
import Comment from "./Comment";

class ButtonMod extends React.Component {

    constructor(){
         super();
         this.state = {
             visible: false
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
                <button onClick={this.showModal} id="comment">Commenter </button>
                <Comment visible={this.state.visible}
                         cache={this.hideModal}
                />
            </div>
        )
    }
}
export default ButtonMod;

