import {useState, useEffect} from 'react'


const Hero = ()=>{
 let [bg, setBg] = useState('bg-white')
 let [text, setText] = useState('text-black')
 
 useEffect(()=>{
 }, [])

  return(
    <>
     <section className={`${bg} ${text}`}> 
      <section className=" container-fluid d-sm-flex d-block">
        <div className="profile d-flex align-items-start justify-content-center py-4">
         <img src="../../public/img/MubarakProfile.webp" className="rounded-circle w-60 w-50-sm"/>
         <i className="bi bi-sun-fill theme-icon mfs-8 " style={{marginRight:'-27px',}} onClick={()=>{
          setBg((prev)=>{
           if(prev === 'bg-dark'){
            return 'bg-white'
           } else{
            return 'bg-dark'
           }
          })
          setText(prev=> prev === 'text-black'? 'text-white': 'text-black')
         }}></i>
        </div>
        {/*profile info*/}
        <div className="profile-info justify-content-center row py-3">
          <h1 className="text-center fw-bolder mfs-10 mb-4 ff-rubik">
            MUBARAK <br/> OWOSHENI
          </h1>
          <h2 className="text-uppercase text-center fw-bolder mfs-5 mb-3 ff-montserrat-bold">
            Frontend Developer
          </h2>
          {/*social icons*/}
          <div className={`text-center mfs-4 ${text}`}>
            <a href="https://x.com/mubarak_codes" target="_blank">
              <i className={`bi bi-twitter-x px-2 ${text}`}></i>
            </a>
            <a href="https://github.com/mubarak-codes" target="_blank">
              <i className={`fa-brands fa-github px-2 ${text}`}></i>
            </a>
          </div>
          {/*profile decription*/}
          <div className="mfs-2 text-center w-90  my-3">
            I'm a developer with a passion for delivering solutions that drive business growth. With expertise in making modern web apps. I'm dedicated to delivering high quality results that exceed expectations.
          </div>
          <button className="btn bg-success text-white w-30 p-2 rounded-4">
            Resume
          </button>
        </div>
      </section>
     </section>
    </>
  )
};

export default Hero;
