import React, { useContext } from 'react'
import { ModalContext, ModalDispatchContext } from '../context/ModalContext'
import LoginForm from './LoginForm'
import '../styles/ModalStyles.css'

function Modal() {
    const state = useContext(ModalContext)
    const dispatch = useContext(ModalDispatchContext)
    return (
        <>
            <div
                className={`${
                    !state.isVisible ? 'invisible' : 'visible'
                } modal-overlay`}
            >
                <div className="modal-content">
                    <h2>Modal Content Here</h2>
                    <LoginForm />
                    <button onClick={() => dispatch({ type: 'HIDE_MODAL' })}>
                        Close
                    </button>
                </div>
            </div>
        </>
    )
}

export default Modal
