import React, { useContext } from 'react'
import { ModalContext, ModalDispatchContext } from '../context/ModalContext'
import LoginForm from './LoginForm'

function Modal(props) {
    return (
        <>
            <div
                className={`${
                    !props.state.isVisible ? 'invisible' : 'visible'
                } modal-overlay`}
            >
                <div className="modal-content">
                    <h2>Modal Content Here</h2>
                    <LoginForm />
                    <button
                        onClick={() => props.dispatch({ type: 'HIDE_MODAL' })}
                    >
                        Close
                    </button>
                </div>
            </div>
        </>
    )
}

export default Modal
