import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import LoginPage from './Pages/LoginPage'
import Register from './Pages/Register'
import HomePage from './Pages/HomePage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<AuthLayout />}>
          <Route index element={<LoginPage />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
