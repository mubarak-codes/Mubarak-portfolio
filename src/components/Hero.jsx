

const Hero = ()=>{

  return(
    <>
      <section className="my-3">
        <div className="profile d-flex align-items-start justify-content-center py-4">
         <img src="../../public/img/MubarakImage.jpeg" className="rounded-circle w-60 w-25-sm"/>
    <i className="bi bi-sun-fill mfs-8 " style={{marginRight:'-25px',}}></i>
        </div>
        {/*profile info*/}
        <div className="profile-info justify-content-center row">
          <h1 className="text-center fw-bolder mfs-10 mb-4">
            MUBARAK <br/> OWOSHENI
          </h1>
          <h2 className="text-uppercase text-center fw-semibold mfs-5 mb-3">
            Frontend Developer
          </h2>
          {/*social icons*/}
          <div className="text-center">
            <a href="https://x.com/mubarak_codes" target="_blank">
              <i className="bi bi-twitter-x text-black px-2"></i>
            </a>
            <a href="https://github.com/mubarak-codes" target="_blank">
              <i className="fa-brands fa-github text-black px-2"></i>
            </a>
          </div>
          {/*profile decription*/}
          <div className="mfs-2 text-center w-80  my-3">
            I'm a developer with a passion for delivering solutions that drive business growth. With expertise in crafting modern web apps. I'm dedicated to delivering high-quality results that exceed expectations.
          </div>
          <button className="btn bg-black text-white w-30 p-2 rounded-4">
            Resume
          </button>
        </div>
      </section>
    </>
  )
};

export default Hero;
