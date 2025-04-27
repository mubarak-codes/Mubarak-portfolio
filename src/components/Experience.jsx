import experience from '../data/Experience'


const Experience = ()=>{

 return(
  <>
   <section className="px4 px6-sm px8-md">
    <h2 className="fs8 text-center ff-rubik mt8 mb6"> EXPERIENCE</h2>
    <div className="d-grid gap-3 gr2-sm">{experience.map((experience)=>(
     <div className="bg-green10 rounded-4 p4">
      <h3 className="ff-montserrat-bold fs4">{experience.role}</h3>
      <div className="fs1 fw-bold">{experience.name} <span className="fs1 opacity75"><span className="fw-bolder ff-rubik me1">&middot;</span>{experience.date}</span> </div>
      <div className="opacity75 fs2 py2">{experience.description}</div>
      <div className="fs1 opacity75"><i className="bi bi-geo-alt me1 fw-bold"></i>{experience.location}</div>
     </div>
     ))}
    </div>
   </section>
  </>
 )
};

export default Experience;
