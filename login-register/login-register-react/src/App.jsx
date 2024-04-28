import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navBar'
import LoginForm from './components/loginForm.jsx'
import RegisterForm from './components/registerForm.jsx'
import Home from './pages/home.jsx'

function App() {
  

  return (
    <>
    <Router>
     <Navbar/>
    <Routes>
    <Route exact path="/" element={<Home/>} />
          <Route path="/login" element={<LoginForm/>} />
          <Route path="/register" element={<RegisterForm/>} />
    </Routes>
    </Router>
    </>
  )
}

export default App
