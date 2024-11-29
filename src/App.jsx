import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Index from './components/Index';
import AddBook from './components/AddBook';
import EditBook from './components/EditBook'

function App() {
 

  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Index/>}/>
      <Route path='/addbook' element={<AddBook/>}/>
      <Route path="/editbook/:id" element={<EditBook />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App
