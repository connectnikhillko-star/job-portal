import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/public/Home'
import Jobs from './pages/public/Jobs'
import JobDetails from './pages/public/JobDetails'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/jobs" element={<Jobs />} />

        <Route path="/jobs/:id" element={<JobDetails />} />

        <Route
          path="/login"
          element={<h1>Login Page</h1>}
        />

        <Route
          path="/register"
          element={<h1>Register Page</h1>}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App