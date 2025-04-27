import {useState, useEffect, useRef} from 'react'


const Hero = ({bg, text, icon, setBg, setIcon, setText})=>{
 const themeRef = useRef();
 
  return(
    <>
     <section className=" mt14 px4 px10-sm px20-md"> 
      <section className=" container-fluid flex-sm mt4 items-center d-row-reverse pt4">
        <div className="profile flex items-start content-center py4">
         <img src="img/MubarakAvatar.jpg" className="rounded-circle w70  w100-sm w90-md w80-lg ms-sm-auto" style={{marginLeft:'27px'}}/>
         <i className={`bi ${icon} theme-icon fs8 click-fade click-grow`} ref={themeRef} style={{marginRight:'0px',}} onClick={()=>{
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
        <div className="profile-info justify-content-center row py-3 justify-content-sm-start me8-sm">
          <h1 className="text-center text-sm-start fw-bolder fs7 mb4 ff-rubik">
           
            MUBARAK <br className="d-inline d-sm-none"/> OWOSHENI
          </h1>
          <h2 className="text-uppercase text-sm-start text-center fw-bolder fs3 mb3 ff-montserrat-bold opacity75">
            Frontend Developer
          </h2>
          {/*social icons*/}
          <div className={`text-center text-sm-start fs6 ${text}`}>
            <a href="https://x.com/mubarak_codes" target="_blank">
              <i className={`bi bi-twitter-x px2 ${text} click-grow click-fade`}></i>
            </a>
            <a href="https://www.linkedin.com/in/mubarak-codes-6768b8361?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
              <i className={`fa-brands fa-linkedin px2 ${text} click-grow click-fade`}></i>
            </a>

            <a href="https://github.com/mubarak-codes" target="_blank">
              <i className={`fa-brands fa-github px2 ${text} click-fade click-grow`}></i>
            </a>
          </div>
          {/*profile decription*/}
          <div className="fs2 text-center text-sm-start mx3 mx-sm-auto my3">
            I'm Mubarak Owosheni, 18 years old, with 2+ years of experience. With expertise in making modern web apps.
          </div>
         <div  className="row justify-content-center justify-content-sm-start my3" download><a href="files/Mubarak_Owosheni_Resume.pdf" className="hover-bg-trans hover-b-green b hover-text-green bg-green text-snow transit b-trans  py2 rounded-pill w40  w30-md text-center ms2-sm">
            Resume
         </a></div>
        </div>
      </section>
     </section>
    </>
  )
};

export default Hero;
