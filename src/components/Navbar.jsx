

const Navbar = ({text, bg})=>{

 return(
  <>
   <section className=" mb5">
    <nav className={`navbar px13-sm px15-md navbar-expand ${bg} fixed py3 left0 right0 top0 z-index100`}>
     <div className="navbar-brand fw-bolder container-fluid ff-rubik text-uppercase text-green fs5">
          Mubarak
     </div>
     <i data-mk-target="#navbar" className="fa d-none fa-bars offscreen-toggler"></i>
     <ul id="navbar" className="navbar-nav me3 gap-3 fs2 offscreen-star">
      <li className="nav-item cursor-pointer hover-fade"><a href="#about" className={`d-none`}>About</a></li>
      <li className="nav-item cursor-pointer hover-fade"><a href="#projects" className={``}>Projects</a></li>
      <li className="nav-item cursor-pointer hover-fade"><a href="#experience" className={`d-none`}>Experience</a></li>
      <li className="nav-item cursor-pointer hover-fade"><a href="#contact" className={``}>Contact</a></li>
     </ul>
    </nav>
   </section>

  </>
 )
}

export default Navbar;
