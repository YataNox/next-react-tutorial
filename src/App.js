import React from 'react'
import { ModalProvider } from './context/ModalContext'
import SignUp from './components/SignUp'
import Modal from './components/Modal'

function App() {
    return (
        <ModalProvider>
            <SignUp />
            <Modal />
        </ModalProvider>
    )
}

export default App
