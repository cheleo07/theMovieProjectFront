import React from "react";
import "./DescriptionModal.css";

function DescriptionModal({ visible, description, onClose }) {
    if (!visible) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>X</button>
                <h2>Description complète</h2>
                <p className="full-description">{description}</p>
            </div>
        </div>
    );
}

export default DescriptionModal;
