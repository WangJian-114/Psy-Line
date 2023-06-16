import { BrowserRouter, Routes, Route } from 'react-router-dom'

import AuthLayout from './layouts/AuthLayout'
import LoginPage from './Pages/LoginPage'
import Register from './Pages/Register'
import HomePage from './Pages/HomePage'
import SearchPage from './Pages/SearchPage'
import MainHomePage from './Pages/MainHomePage'
import ProfessionalProfilePage from './Pages/ProfessionalProfilePage'
import DiaryEntryPage from './Pages/DiaryEntryPage'
import SessionsPage from './Pages/SessionsPage'
import PaymentsPage from './Pages/PaymentsPage'
import DiaryPage from './Pages/DiaryPage'

// Context
import AppointmentState from './context/appointments/appointmentState';
import ProfessionalState from './context/professional/professionalState';


function App() {

  return (
    <ProfessionalState>
      <AppointmentState>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<AuthLayout />}>
              <Route index element={<LoginPage />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route path="search" element={<SearchPage />}/>
            <Route path="home" element={<HomePage />} />
            <Route path="main" element={<MainHomePage />} />
            <Route path="profile/:id" element={<ProfessionalProfilePage />} />
            <Route path="diaryentry" element={<DiaryEntryPage />} />
            <Route path="sessions" element={<SessionsPage />} />
            <Route path="payments" element={<PaymentsPage />} />
            <Route path="diarypage" element={<DiaryPage />} />
          </Routes>
        </BrowserRouter>
      </AppointmentState>
    </ProfessionalState>
  )
}

export default App
