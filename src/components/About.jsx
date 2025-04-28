


let About = ()=>{


 return(
  <>
   <section id="about" className="flex d-col items-center mt12 px4 px10-sm px19-md px16-lg">
    <h3 className="mb8 fs9 ff-rubik">ABOUT</h3>
    <div className="flex d-col d-row-sm gap-5 items-center content-center">
     <img src="img/Mubarak_yellow_bw.jpeg" className="w80 h350px-lg w40-sm rounded-1" />
     <div className="w50-sm w40-lg ">
      <div className="fs2 opacity75 text-center text-sm-start">Hi, <span className="text-green fw-semibold">I'm Mubarak Owosheni</span>, an 18 year-old web developer from Lagos. With over 2 years of experience, with expertise in building modern web apps.<br/> I started coding in 2023 and have since honed my skills in creating responsive, user-friendly, and scalable web apps using <span className="text-green fw-semibold">HTML, CSS, Bootstrap, JavaScript, and React</span>.<br/> I'm excited to collaborate with like minded individuals to bring their ideas to life.</div><br/>
      <a href="#contact" className="flex content-center content-start-sm">
       <div className="bg-green b b-trans hover-bg-trans hover-b-green hover-text-green rounded-pill w30 fs2 py2 text-center text-snow fw-semibold opacity100 cursor-pointer">Contact</div>
      </a>
     </div>
    </div>
   </section>
  </>
 )
};

export default About;
