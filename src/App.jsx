import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import {usePersistState} from '../external-library/mkHooks/LocalStorage.js'
import {useState, useRef} from 'react'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'



function App() {
let [bg, setBg] = usePersistState('theme', 'bg-white')
 let [text, setText] = usePersistState('textTheme','text-black');
 const [icon, setIcon] = usePersistState('themeIcon', 'bi-sun-fill')
 
  document.body.className = `${bg} ${text}`;

  
 return(
  <>
   <Navbar text={text}  />
   <Hero bg={bg} text={text} icon={icon} setText={setText} setBg={setBg} setIcon={setIcon} />
   <Experience />
   <Project bg={bg} text={text} />
   <Skills />
   <Contact text={text} />
   <Footer />
  </>
 )
}
export default App;


