import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import DefaultLayout from './layouts/defaults'
import NoFooter from './layouts/NoFooter'
import Home from './pages/Home'
import Payment from './pages/Payment'
import Profile from './pages/Profile'
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import Products from './pages/Products'
import ProductInfo from './pages/ProductInfo'
import AboutUs from './pages/AboutUs'
import NoPage from './pages/NoPage'
import PrivateRoute from './components/PrivateRoute'
import Auth from './components/Auth'
import './tailwind.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='/products' element={<Products />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='' element={<PrivateRoute />}>
              <Route path='/payment' element={<Payment />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/products/:id' element={<ProductInfo />} />
            </Route>
          </Route>
          <Route path='/404' element={<NoFooter />}>
            <Route path='' element={<NoPage />} />
          </Route>
          <Route path='*' element={<Navigate to='/404' />} />
        </Routes>
      </BrowserRouter>
    </Auth>
  </React.StrictMode>
)
