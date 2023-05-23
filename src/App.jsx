import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import Login from './Pages/Login'
import Register from './Pages/Register'
import HomePage from './Pages/HomePage'
import SearchPage from './Pages/SearchPage'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          <Route index element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="search" element={<SearchPage />}/>
        </Route>
        <Route path="home" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
