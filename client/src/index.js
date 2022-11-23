import React from 'react'
import ReactDOM from 'react-dom/client'
import DefaultLayout from './layouts/defaults'
import Home from './pages/Home'
import Payment from './pages/Payment'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Register from './pages/Register'
import AboutUs from './pages/AboutUs'
import NoPage from './pages/NoPage'
import './tailwind.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<DefaultLayout />}>
          <Route path='/' index element={<Home />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/register' element={<Register />} />
          <Route path='/about-us' element={<AboutUs />} />
          <Route path='/404' element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
