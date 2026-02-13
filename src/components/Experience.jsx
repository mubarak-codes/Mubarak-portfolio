import experience from '../data/Experience'


const Experience = ()=>{

 return(
  <>
   <section className="mt12 px5 px10-sm px19-md" id="experience">
    <h2 className="fs9 text-center txt-bolder mb8 ff-montserrat-bold"> Experience</h2>
    <div className="d-grid gap-4 gr2-sm">{experience.map((experience)=>(
     <div className="  p4 flex d-col gap1 bb d-grid-sm gr2">
      <h3 className="fw-bolder fs3">{experience.role}</h3>
      <div className="fs4 fw-bold text-green">{experience.name} <span className="fs1 opacity75"><span className="fw-bolder  me1">&middot;</span>{experience.date}</span> </div>
           <div className="fs1 opacity75 "><i className="bi bi-geo-alt me1 fw-bold"></i>{experience.location}</div>
     </div>
     ))}
    </div>
   </section>
  </>
 )
};

export default Experience;
