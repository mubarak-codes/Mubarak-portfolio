


const Navbar = ({text})=>{

 return(
  <>
   <section className=" mb-5">
    <nav className="navbar bg-success text-white navbar-expand fixed-top">
     <div className="navbar-brand fw-bolder container-fluid text-white ff-rubik text-uppercase">
          Mubarak
     </div>
     <ul className="navbar-nav me-3 gap-3 mfs-2">
      <li className="nav-item click-fade"><a href="#projects" className={`text-white`}>Projects</a></li>
      <li className="nav-item click-fade"><a href="#contact" className={`text-white`}>Contact</a></li>
     </ul>
    </nav>
   </section>

  </>
 )
}

export default Navbar;
