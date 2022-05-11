import React from 'react';
import './Comment.css';

export default function Comment(props) {
    return(
        <div className="modal-container" style={{
            transform: props.visible ? 'translateY(0vh)' : 'translateY(-100vh)',
            opacity: props.visible ? '1' : '0'
        }}
        >
            <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur corporis ducimus el
                    igendi esse expedita, facilis fugiat fugit iste laboriosam laudantium nemo non nost
                    rum optio quidem sed sint tenetur veritatis!</span><span>Adipisci aliquam autem beatae doloremqu
                    e ducimus ea, esse, itaque magnam maxime molestias nulla officia pariatur perfer
                    endis possimus quibusdam quos velit. A alias atque, eius eveniet praesentium quisquam q
                    uo sint unde?</span><span>Adipisci, amet assumenda dolores ducimus, illo laboriosam libero nam nesc
                    iunt nihil nisi, nobis quia recusandae rem! Adipisci autem et in nam rem sit, unde. Amet ducimus ei
                  nderit sapiente em voluptatum? Numquam, quibusdam.</span></p>

            <button onClick={props.cache}>X</button>
            <form className="form-comment">
                <label>
                    Nom :
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Poster"/>
            </form>
        </div>
    )
}