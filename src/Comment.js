import React from 'react';
import { useState} from "react";

import './Comment.css';
import CheckboxList from "./CheckboxList";

export default function Comment(props) {

    return(
        <div className="modal-container" style={{
            transform: props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: props.visible ? '1' : '0'
        }}
        >
            <form className="form-comment" >
                <label>
                    Pseudo :  <input type="text" name="pseudo" value="uwu"  required/>
                </label>
                <br/>
                <label id="review">
                    Commentaire :  <input type="text" name="review"  required />
                </label>
                <br/>
                <label>
                    Note :  <input type="number" name="rate"  />
                </label>
                <br/>

                <button className="btn-comment" onClick={props.cache}>X</button> <input className="btn-comment" type="submit" value="Poster"/>
            </form>
        </div>
    )

}


// const [input, setInput] = useState('')
//
//
//     this.handleChange = (event, value) => {
//         //  this.setState({
//          //   value
//         //});
//     };