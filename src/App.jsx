import './App.css'
import { IoLogoGithub } from "react-icons/io";
import Linkedin from './components/Linkedin';

function App() {

  return (
    <div className='container-app'>
      <h1>Links lucasH</h1>

      <a href="https://github.com/lucassilvahomem" className='links' target='_blank'> 
      <IoLogoGithub />
        github 
      <IoLogoGithub />
      </a>
      <Linkedin />
    </div>
  )
}

export default App
