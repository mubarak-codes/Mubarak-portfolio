import {useState, useEffect, useRef} from 'react'


const Hero = ({bg, text})=>{
 
  return(
    <>
     <section className=" mt16 px5 px10-sm px19-md"> 
      <section className=" flex mt4 items-center d-row-reverse-sm d-col-reverse pt4">
        <div className="profile flex items-start content-center py4">
         <img src="img/MubarakResume.png" className=" w50 w40-sm -me5-sm  ms-sm-auto mt5"/>
                 </div>
        {/*profile info*/}
        <div className=" content-center flex py-3 content-start-sm gap1 d-col ">
          <div className="flex content-center content-start-sm p1 flex-col gap3">
           <div className="txt-bolder text-3xl nowrap ff-montserrat-bold text-center sm:text-start">
            Software Developer
           </div>
   <div className="flex justify-center sm:justify-start opacity-75">
    Hi, I'm Mubarak Owosheni. I specialize in building dynamic, scalable, and high- performnance web and mobile applications that deliver seamless user experiences with a strong emphasis on functionality, adaptability, and user engagement.
   </div>
          </div>

          {/*social icons*/}
          <div className={`text-center text-sm-start text-sm ${text} mb3 flex gap-2 justify-center items-center opacity-75 sm:justify-start`}>
            <a href="https://x.com/mubarak_codes" target="_blank">
               <i className={`bi bi-twitter-x ${text} click-grow click-fade bg-gray-500/25 p-2 rounded-full`}></i>
            </a>
            <a href="https://www.linkedin.com/in/mubarak-owosheni-6768b8361" target="_blank">
              <i className={`fa-brands fa-linkedin bg-gray-500/25 p-2 rounded-full ${text} click-grow click-fade`}></i>
            </a>

            <a href="https://github.com/mubarak-codes" target="_blank">
              <i className={`fa-brands fa-github bg-gray-500/25 p-2 rounded-full ${text} click-fade click-grow`}></i>
            </a>
          </div>
         <div  className="flex content-center content-start-sm  gap-2" download>
          <a href="#contact" className={`px-4 py-2 no-underline text-inherit cursor-pointer link bg-gray-500/25 rounded-sm opacity-75`}>Let's Chat</a>
          <a href="files/Mubarak_Resume.pdf" className={`bg-gray-500/25 px-4 py-2 text-inherit rounded-sm opacity-75 cursor-pointer link`}>Resume</a>

         </div>
        </div>
      </section>
     </section>
    </>
  )
};

export default Hero;
