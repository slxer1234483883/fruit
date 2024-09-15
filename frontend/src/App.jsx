import { Route, Routes } from 'react-router-dom'
import Login from './components/pages/Login'
import Homepage from './components/pages/Homepage'
import Translator from './components/pages/Translate'
import SplashScreen from './components/pages/SplashScreen'
import Chatapp from './components/pages/Chatapp'
import About from './components/pages/About'
import Faq from './components/pages/Faq'
import "./App.css"
function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Homepage/>}></Route>
        <Route path='/translate' element={<Translator/>}></Route>
        <Route path="/splash" element={<SplashScreen/>} />
        <Route path="/chatapp" element={<Chatapp/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>
    </>
  )
}

export default App
