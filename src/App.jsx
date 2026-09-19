import { Routes, Route } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Map from './pages/Map'
import Saved from './pages/Saved'
import Search from './pages/Search'

function handleSave() {
  alert('Saved!')
}

function handleLogin() {
  alert('Logged in!')
}

function handleSearch() {
  alert('Searching...')
}

function App() {

  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/map" element={<Map />} />
      <Route path="/saved" element={<Saved />} />
      <Route path="/search" element={<Search />} />
    </Routes>
    </>
  )
}


export default App
