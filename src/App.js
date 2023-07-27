import React, { useState } from 'react'
import Navbar from './Components/Navbar'
import Form from './Components/Form'
import Notes from './Components/Notes'
import Modal from './Components/Modal'

export default function App() {
  return (
    <>
      <Modal />
      <Navbar />
      <Form />
      
    </>
  )
}

