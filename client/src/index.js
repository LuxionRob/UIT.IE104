import React from 'react'
import ReactDOM from 'react-dom/client'
import DefaultLayout from './layouts/defaults'
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
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/' element={<DefaultLayout />}>
            <Route index element={<Home />} />
            <Route path='/payment' element={<PrivateRoute />}>
              <Route path='' element={<Payment />} />
            </Route>
            <Route path='/profile' element={<PrivateRoute />}>
              <Route path='' element={<Profile />} />
            </Route>
            <Route path='/products' element={<Products />} />
            <Route path='/products/:id' element={<ProductInfo />} />
            <Route path='/about-us' element={<AboutUs />} />
            <Route path='/404' element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Auth>
  </React.StrictMode>
)
