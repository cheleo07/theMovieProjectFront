import React from 'react';
import {useState} from "react";
import { useEffect } from "react";

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

    useEffect(() => {
        console.log("Le composant Comment reçoit visible:", props.visible);
    }, [props.visible]);

    function handleSubmit(event) {
        event.preventDefault(); // ✅ Empêcher le rechargement de la page

        console.log("Envoi du commentaire..."); // 🔴 Vérifier dans la console si cela s'affiche uniquement après le clic

        if (!comment.pseudo || !comment.review) {
            alert("Veuillez remplir tous les champs !");
            return;
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(comment)
        };

        fetch("http://localhost:3005/api/comment/" + props.idMovie, requestOptions)
            .then((res) => res.json())
            .then((json) => {
                alert(JSON.stringify(json));
            })
            .catch((error) => console.error("Erreur lors de l'envoi du commentaire :", error));
    }

    function handleOnChange(event) {
        event.preventDefault();
        setComment(prev => ({...prev, [event.target.name]: event.target.value}));
    }

    return (
        <div className={`modal-container ${props.visible ? "active" : ""}`}>

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