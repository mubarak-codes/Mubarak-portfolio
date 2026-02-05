import {useState, useEffect, useRef} from 'react'


const Hero = ({bg, text, icon, setBg, setIcon, setText})=>{
 const themeRef = useRef();
 
  return(
    <>
     <section className=" mt16 px5 px10-sm px19-md"> 
      <section className=" flex-sm mt4 items-center d-row-reverse pt4">
        <div className="profile flex items-start content-center py4">
         <img src="img/MubarakResume.png" className=" w50 w60-sm -me5-sm  ms-sm-auto" style={{marginLeft:'27px'}}/>
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
        <div className=" justify-content-center row py-3 justify-content-sm-start gap1">
          <h1 className="text-center text-sm-start fw-bolder fs9">
           
            Hello!
          </h1>
          <h2 className="fs8">
           I'm Mubarak
          </h2>
          <div className="text-uppercase flex content-center content-start-sm p1 txt-bolder">
           <div className="txt-bolder fs5 nowrap">
            Software Developer
           </div>
          </div>

          {/*social icons*/}
          <div className={`text-center text-sm-start fs6 ${text} mb3`}>
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
         <div  className="flex content-center content-start-sm  gap5" download>
          <a href="#contact" className="bg-green px3 pb1 text-snow link pt2 hover-fade active-bg-trans b b-trans active-b-green active-text-green cursor-pointer">Let's Chat</a>
          <a href="files/Mubarak_Resume.pdf" className={`b b-green hover-fade active-bg-green active-text-snow px2 b2 w30 fs2 py2 text-center text-green fw-semibold opacity100 cursor-pointer link`}>Resume</a>

         </div>
        </div>
      </section>
     </section>
    </>
  )
};

export default Hero;
