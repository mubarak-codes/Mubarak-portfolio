

const Navbar = ({text, bg})=>{

 return(
  <>
   <section className=" mb5">
    <nav className={`navbar navbar-expand-sm ${bg} fixed-top py3 left0  right0 top0 `}>
     <div className=" container py3 py1-sm">
      <div className=" fw-bolder ff-rubik text-uppercase text-green fs5">
          Mubarak
      </div>
      <i role="button" aria-controls="offcanvasExample" data-bs-target="#navbar" data-bs-toggle="collapse" className="fa fa-bars d-inline d-sm-none fs6"></i>

      <div id="navbar" className="collapse navbar-collapse">
       <ul className="flex fs2 gap-3 navbar-nav py3 ms-auto">
         <li className="nav-item cursor-pointer hover-fade"><a href="#about" className={`link-inherit`}>About</a></li>
         <li className="nav-item cursor-pointer hover-fade"><a href="#projects" className={`link-inherit`}>Projects</a></li>
         <li className="nav-item cursor-pointer hover-fade"><a href="#experience" className={`link-inherit`}>Experience</a></li>
         <li className="nav-item cursor-pointer hover-fade"><a href="#contact" className={`link-inherit`}>Contact</a></li>
       </ul> 
      </div>
     </div>
    </nav>
   </section>

  </>
 )
}

export default Navbar;
