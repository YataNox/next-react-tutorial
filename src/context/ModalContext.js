'use client'

import React, { createContext, useReducer, Dispatch } from 'react'
import Modal from '../components/Modal'

const initialState = { isVisible: false }
const ModalContext = createContext(initialState)

export const ModalDispatchContext = createContext()

function modalReducer(state, action) {
    switch (action.type) {
        case 'SHOW_MODAL':
            return { ...state, isVisible: true }
        case 'HIDE_MODAL':
            return { ...state, isVisible: false }
        default:
            return state
    }
}
/* signup submit시 리렌더링 과정에서 modal창도 리렌더링 되어 SHOW 처리가 안됌.. */
const ModalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(modalReducer, initialState)
    return (
        <ModalDispatchContext.Provider value={dispatch}>
            <ModalContext.Provider value={state}>
                {children}
                <Modal />
            </ModalContext.Provider>
        </ModalDispatchContext.Provider>
    )
}

export { ModalContext, ModalProvider }
