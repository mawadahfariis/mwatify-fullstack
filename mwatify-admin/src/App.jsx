import React from 'react'
import { ToastContainer } from 'react-toastify';
import { Routes, Route } from 'react-router-dom'
import Addsong from './pages/Addsong';
import Addalbum from './pages/Addalbum';
import Listsong from './pages/Listsong';
import Listalbum from './pages/Listalbum';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

export const url='http://localhost:4000'

function App() {
  return (
    <div className='flex min-h-screen'>
      <ToastContainer />
      <Sidebar />

      <div className='flex-1 h-screen overflow-y-scroll bg-pink-100'>
        <Navbar />
        <div className='pt-8 pl-5 sm:pt-12 sm:pl-12'>

          <Routes>
            <Route path='/add-song' element={<Addsong />}></Route>
            <Route path='/add-album' element={<Addalbum />}></Route>
            <Route path='/list-song' element={<Listsong />}></Route>
            <Route path='/list-album' element={<Listalbum />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App