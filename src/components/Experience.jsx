import experience from '../data/Experience'


const Experience = ()=>{

 return(
  <>
   <section className="mt12 px5 px10-sm px19-md" id="experience">
    <h2 className="fs9 text-center txt-bolder mb8 ff-montserrat-bold"> Experience</h2>
    <div className="">{experience.map((experience)=>(
     <div className="  py4 flex d-col d-row-sm gap7-sm bb relative pb12-sm w75">
      <h3 className="fw-bolder fs4 absolute-sm top50-sm">{experience.role}</h3>
      <div className="fs4 fw-bold absolute-sm left50"><span className="text-green">{experience.name}</span> <span className="fs1 opacity75"><span className="fw-bolder  me1">&middot;</span>{experience.date}</span>
           <div className="fs1 opacity75 mt2"><i className="bi bi-geo-alt me1 fw-bold"></i>{experience.location}</div>
     </div>
     </div>
     ))}
    </div>
   </section>
  </>
 )
};

export default Experience;
