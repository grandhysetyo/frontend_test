import React from 'react'

const Modal = (props) => {
    if(!props.show){
        return null
    }
    return (
        <div className="modal">            
            <div className="modal-content">
                <img src={props.img} alt="" />
                <button onClick={props.onClose}>Tutup</button>
            </div>            
        </div>
    )
}

export default Modal
