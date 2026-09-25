import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Map from './pages/Map'
import Saved from './pages/Saved'
import Search from './pages/Search'
import Chat from './pages/Chat'
import Agenda from './pages/Agenda'
import Login from './pages/Login'
import Signup from './pages/Signup'

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/search" element={<Search />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/agenda" element={<Agenda />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> 
    </Routes>
    </>
  )
}

export default App
