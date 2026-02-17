import {useState, useEffect, useRef} from 'react'


const Navbar = ({text, bg, icon, setText, setBg, setIcon})=>{
 const themeRef = useRef();

 return(
  <>
   <section className=" mb5">
    <nav className={`navbar navbar-expand-sm ${bg} fixed-top py3 left0  right0 top0 `}>
     <div className=" mx5 px9-sm px18-md py3 py1-sm flex items-center content-between w100 relative">
      {/*logo*/}
      <div className={`fw-bolder fs5 ${text} ff-montserrat-bold`}>
          Mubarak Owosheni
      </div>
      <i role="button" aria-controls="offcanvasExample" data-bs-target="#navbar" data-bs-toggle="collapse" className="fa fa-bars d-none fs6 ms-auto absolute-xs right0"></i>

      <div id="navbar" className=" navbar-collapse hidden sm:block">
       <ul className={` fs2 gap3 ${bg} navbar-nav py3 ms-auto absolute-xs left0 top50px right0 hidden mr-10`}>
        <li className="nav-item cursor-pointer hover-fade hidden sm:block"><a href="#about" className={`link-inherit`}>About</a></li>
        <li className="nav-item cursor-pointer hover-fade hidden sm:block"><a href="#projects" className={`link-inherit`}>Projects</a></li>
        <li className="nav-item cursor-pointer hover-fade hidden sm:block"><a href="#experience" className={`link-inherit`}>Experience</a></li>
        <li className="nav-item cursor-pointer hover-fade hidden sm:block"><a href="#contact" className={`link-inherit`}>Contact</a></li>
        <li className="nav-item cursor-pointer hover-fade hidden sm:block"><a href="#services" className={`link-inherit`}>Services</a></li>

       </ul> 
  
      </div>
<i className={`bi ${icon} theme-icon click-fade click-grow ml-auto`} ref={themeRef} style={{marginRight:'0px',}} onClick={()=>{
          setBg((prev)=>{
           if(prev === 'bg-black'){
            return 'bg-white'
           } else{
            return 'bg-black'
           }
          })
          setText(prev=> prev === 'text-black'? 'text-white': 'text-black');
          setIcon(prev=> prev === 'bi-sun-fill'? 'bi-moon-fill': 'bi-sun-fill')
         }}></i>

     </div>
    </nav>
   </section>

  </>
 )
}

export default Navbar;
