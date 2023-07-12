import { useState } from 'react'
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import LoginPage from "./pages/LoginPage.jsx";
import './App.css'
import {HomePage} from "./pages/HomePage.jsx";
import {TheSidebar} from "./components/TheSidebar.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <GoogleOAuthProvider clientId={"302171348832-epgqmgsq9b5ehmmn9kudhk846imp08ho.apps.googleusercontent.com"}>
          <TheSidebar />
          <div className="page-content">
              <Routes>
                  <Route path="/" element={<HomePage />} />
                  <Route path="/login" element={<LoginPage/>} />
              </Routes>
          </div>
      </GoogleOAuthProvider>
  )
}

export default App
