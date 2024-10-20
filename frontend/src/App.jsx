import React from 'react'
import {Routes, Route} from 'react-router-dom'
import CreateBook from './pages/CreateBook'
import Home from './pages/Home'
import DeleteBook from './pages/DeleteBook'
import EditBook from './pages/EditBook'
import ShowBook from './pages/ShowBook'

const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home />} ></Route>
        <Route path='/create' element={<CreateBook />} ></Route>
        <Route path='/details/:id' element={<ShowBook />} ></Route>
        <Route path='/edit:id' element={<EditBook />} ></Route>
        <Route path='/delete/:id' element={<DeleteBook />} ></Route>
      </Routes>
    </div>
  )
}

export default App;