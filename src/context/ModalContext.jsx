'use client'

import React, { createContext, useReducer, Dispatch, useContext } from 'react'
import Modal from '../components/Modal'

const initialState = { isVisible: false }
const ModalContext = createContext(initialState)

export const ModalDispatchContext = createContext()

function modalReducer(state, action) {
    switch (action.type) {
        case 'SHOW_MODAL':
            return { ...state, isVisible: true }
        case 'HIDE_MODAL':
            console.log('확인용 Hide')
            return { ...state, isVisible: false }
        default:
            return state
    }
}

const ModalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(modalReducer, initialState)
    return (
        <ModalDispatchContext.Provider value={dispatch}>
            <ModalContext.Provider value={state}>
                {children}
                <Modal state={state} dispatch={dispatch} />
            </ModalContext.Provider>
        </ModalDispatchContext.Provider>
    )
}

export function useModalState() {
    const state = useContext(ModalContext)
    if (!state) throw new Error('ModalProvider not found')
    return state
}
export function useModalDispatch() {
    const dispatch = useContext(ModalDispatchContext)
    if (!dispatch) throw new Error('ModalDispatchProvider not found')
    return dispatch
}

export { ModalContext, ModalProvider }
