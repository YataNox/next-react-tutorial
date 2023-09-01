import React, { useContext } from 'react'
import { ModalContext } from '../context/ModalContext'
import LoginForm from './LoginForm'
import '../styles/ModalStyles.css'

function Modal() {
    const { state, dispatch } = useContext(ModalContext)
    return (
        <>
            {state.isVisible && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h2>Modal Content Here</h2>
                        <LoginForm />
                        <button
                            onClick={() => dispatch({ type: 'HIDE_MODAL' })}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Modal
