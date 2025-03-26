import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Demo from './components/Demo'
import './index.css';
import { LoadingScreen } from './components/sections/LoadingScreen'

function App() {
  const [count, setCount] = useState(0)
  const [isLoaded,setIsLoaded] = useState(false);

  return (
    <>
   {!isLoaded && <LoadingScreen onComplete={ () => setIsLoaded(true)} />}
    </>
  )
}

export default App
