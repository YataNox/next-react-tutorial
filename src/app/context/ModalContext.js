import React, { createContext, useReducer } from 'react'

const ModalContext = createContext()

const initialState = { isVisible: false }

function modalReducer(state, action) {
    switch (action.type) {
        case 'SHOW_MODAL':
            return { isVisible: true }
        case 'HIDE_MODAL':
            return { isVisible: false }
        default:
            return state
    }
}

const ModalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(modalReducer, initialState)
    return (
        <ModalContext.Provider value={{ state, dispatch }}>
            {children}
        </ModalContext.Provider>
    )
}

export { ModalContext, ModalProvider }
