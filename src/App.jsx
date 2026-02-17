import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Project from './components/Project'
import {usePersistState} from '../external-library/mkHooks/LocalStorage.js'
import {useState, useRef} from 'react'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Experience from './components/Experience'
import About from './components/About'
import Services from './components/Services'



function App() {
let [bg, setBg] = usePersistState('theme', 'bg-dark')
 let [text, setText] = usePersistState('textTheme','text-white');
 const [icon, setIcon] = usePersistState('themeIcon', 'bi-sun-fill')
 
  document.body.className = `${bg} ${text}`;

  
 return(
  <>
   <Navbar text={text} bg={bg} icon={icon} setText={setText} setBg={setBg} setIcon={setIcon}/>
   <Hero bg={bg} text={text}/>
   <div className="flex-sm d-col d-row-reverse-sm w100 gap5">
    <About className="" />
    <Services className="" />
   </div>
   <Project bg={bg} text={text} />
   <Experience />
   <Skills />
   <Contact text={text} />
   <Footer />
  </>
 )
}
export default App;


