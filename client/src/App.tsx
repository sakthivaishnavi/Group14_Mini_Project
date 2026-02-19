import React from "react"
import "./App.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import UserLogin from "./pages/UserLogin"
import UserRegister from "./pages/UserRegister"
import ProtectedRoutes from "./routes/ProtectedRoutes"

const Home: React.FC = () => (
  <div className="text-center mt-12">
    <h1 className="text-3xl text-sky-400">Hello LMS Client</h1>
    <p className="mt-4">This is a protected home page.</p>
  </div>
)

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/userRegister" element={<UserRegister />} />

        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route path="*" element={<UserLogin />} />
      </Routes>
    </Router>
  )
}

export default App
