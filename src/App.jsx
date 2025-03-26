import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './components/Demo'
import './index.css';
import { LoadingScreen } from './components/sections/LoadingScreen'
import { Navbar } from './components/sections/Navbar'

function App() {
  const [count, setCount] = useState(0)
  const [isLoaded,setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
   {!isLoaded && <LoadingScreen onComplete={ () => setIsLoaded(true)} />}
    <div className={`min-h-screen transition-opacity duration-700 ${
      isLoaded ? 'opacity-100' : 'opacity-0'
    } bg-black text-gray-100`}>
    <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
    </div>
    </>
  )
}

export default App
