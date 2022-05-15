import React from 'react';
import {useState} from "react";

import './Comment.css';

const EMPTY_COMMENT = {
    pseudo: '',
    date: Date.now(),
    review: '',
    rate: 0,
    category: ''
}

function Comment(props) {

    const [comment, setComment] = useState(EMPTY_COMMENT);

    function handleSubmit(event) {
        event.preventDefault();
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': 'http://localhost:3000/',
                    'Access-Control-Allow-Credentials' : 'true' },
                body: JSON.stringify(comment)
            };
            fetch(
                "http://localhost:3005/api/comment/"+ props.idMovie, requestOptions)
                .then((res) => res.json())
                .then((json) => {
                    alert(JSON.stringify(json))
                })
    }

    function handleOnChange(event) {
        event.preventDefault();
        setComment(prev => ({...prev, [event.target.name]: event.target.value}));
    }

    return (
        <div className="modal-container" style={{
            transform: props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: props.visible ? '1' : '0'
        }}
        >
            <form className="form-comment" >
                <label> Pseudo : </label>
                <input type="text" name="pseudo" value={comment.pseudo} onChange={handleOnChange} required/>
                <br/>
                <label id="review"> Commentaire : </label>
                <input type="text" name="review" value={comment.review} onChange={handleOnChange} required/>
                <br/>
                <label> Note : </label>
                <input type="number" name="rate" value={comment.rate} onChange={handleOnChange} />
                <br/>

                <button className="btn-comment" onClick={props.cache}>X</button>
                <button className="btn-comment" type="button" onClick={handleSubmit}>Poster</button>
            </form>
        </div>
    );
}

export default Comment;