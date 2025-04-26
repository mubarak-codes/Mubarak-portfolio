


const Navbar = ({text})=>{

 return(
  <>
   <section className=" mb5">
    <nav className="navbar bg-green text-snow navbar-expand fixed-top">
     <div className="navbar-brand fw-bolder container-fluid text-snow ff-rubik text-uppercase">
          Mubarak
     </div>
     <ul className="navbar-nav me3 gap-3 fs2">
      <li className="nav-item click-fade"><a href="#projects" className={`text-snow`}>Projects</a></li>
      <li className="nav-item click-fade"><a href="#contact" className={`text-snow`}>Contact</a></li>
     </ul>
    </nav>
   </section>

  </>
 )
}

export default Navbar;
