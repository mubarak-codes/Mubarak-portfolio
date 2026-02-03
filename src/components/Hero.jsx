import {useState, useEffect, useRef} from 'react'


const Hero = ({bg, text, icon, setBg, setIcon, setText})=>{
 const themeRef = useRef();
 
  return(
    <>
     <section className=" mt10 px5 px10-sm px19-md"> 
      <section className=" container-fluid flex-sm mt4 items-center d-row-reverse pt4">
        <div className="profile flex items-start content-center py4">
         <img src="img/MubarakAvatar.jpg" className="rounded-circle w70 -me5-sm  w90-sm w80-md w70-lg ms-sm-auto" style={{marginLeft:'27px'}}/>
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
          <h1 className="text-center text-sm-start fw-bolder fs10 mb4 ff-rubik">
           
            MUBARAK <br className="d-inline d-sm-none"/> OWOSHENI
          </h1>
          <h2 className="text-uppercase text-sm-start text-center fw-bolder fs3 mb3 ff-montserrat-bold opacity75">
            Software Developer
          </h2>
          {/*social icons*/}
          <div className={`text-center text-sm-start fs6 ${text}`}>
            <a href="https://x.com/mubarak_codes" target="_blank">
              <i className={`bi bi-twitter-x px2 ${text} click-grow click-fade`}></i>
            </a>
            <a href="https://www.linkedin.com/in/mubarak-owosheni-6768b8361" target="_blank">
              <i className={`fa-brands fa-linkedin px2 ${text} click-grow click-fade`}></i>
            </a>

            <a href="https://github.com/mubarak-codes" target="_blank">
              <i className={`fa-brands fa-github px2 ${text} click-fade click-grow`}></i>
            </a>
          </div>
          {/*profile decription*/}
          <div className="fs2 text-center text-sm-start mx3 mx-sm-auto my3">
           I'm Mubarak Owosheni</div>
         <div  className="flex content-center content-start-sm my3" download>
          <a href="files/Mubarak_Resume.pdf" className="bg-blue b b-trans hover-bg-trans hover-b-blue hover-text-blue rounded-pill w30 fs2 py2 text-center text-snow fw-semibold opacity100 cursor-pointer link">Resume</a>

         </div>
        </div>
      </section>
     </section>
    </>
  )
};

export default Hero;
