import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'
import Main from './components/Main'
import Login from './components/Login'
import Regsiter from './components/Register'
import AuthContextProvider from './context/AuthContext'
import Dashboard from './components/dashboard/Dashboard'
import ProtectedRoute from './ProtectedRoute'
import PublicRoute from './PublicRoute'
import './assets/css/style.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AuthContextProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/register" element={<PublicRoute><Regsiter /></PublicRoute>} />
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            <Route path="/dashboard" element={<ProtectedRoute> <Dashboard /> </ProtectedRoute>} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthContextProvider>
    </>
  )
}

export default App