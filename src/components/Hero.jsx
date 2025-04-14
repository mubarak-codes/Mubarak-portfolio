import {useState, useEffect, useRef} from 'react'


const Hero = ({bg, text, icon, setBg, setIcon, setText})=>{
 const themeRef = useRef();
 
  return(
    <>
     <section className=""> 
      <section className=" container-fluid d-sm-flex d-block mt-4 w-90 align-items-center flex-row-reverse pt-4">
        <div className="profile d-flex align-items-start justify-content-center py-4">
         <img src="img/MubarakAvatar.jpg" className="rounded-circle w-70 w-60-sm" style={{marginLeft:'27px'}}/>
         <i className={`bi ${icon} theme-icon mfs-8 click-fade click-grow`} ref={themeRef} style={{marginRight:'0px',}} onClick={()=>{
          setBg((prev)=>{
           if(prev === 'bg-dark'){
            return 'bg-white'
           } else{
            return 'bg-dark'
           }
          })
          setText(prev=> prev === 'text-black'? 'text-white': 'text-black');
          setIcon(prev=> prev === 'bi-sun-fill'? 'bi-moon-fill': 'bi-sun-fill')
         }}></i>
        </div>
        {/*profile info*/}
        <div className="profile-info justify-content-center row py-3 justify-content-sm-start w-90-sm">
          <h1 className="text-center text-sm-start fw-bolder mfs-10 mb-4 ff-rubik">
            MUBARAK <br/> OWOSHENI
          </h1>
          <h2 className="text-uppercase text-sm-start text-center fw-bolder mfs-5 mb-3 ff-montserrat-bold">
            Frontend Developer
          </h2>
          {/*social icons*/}
          <div className={`text-center text-sm-start mfs-6 ${text}`}>
            <a href="https://x.com/mubarak_codes" target="_blank">
              <i className={`bi bi-twitter-x px-2 ${text} click-grow click-fade`}></i>
            </a>
            <a href="https://github.com/mubarak-codes" target="_blank">
              <i className={`fa-brands fa-github px-2 ${text} click-fade click-grow`}></i>
            </a>
          </div>
          {/*profile decription*/}
          <div className="mfs-2 text-center text-sm-start mx-3 mx-sm-auto my-3">
            I'm a developer with a passion for delivering solutions that drive business growth. With expertise in making modern web apps. I'm dedicated to delivering high quality results that exceed expectations.
          </div>
          <button className="btn bg-success text-white py-2 rounded-4 w-40 text-center ms-2">
            Resume
          </button>
        </div>
      </section>
     </section>
    </>
  )
};

export default Hero;
