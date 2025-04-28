import experience from '../data/Experience'


const Experience = ()=>{

 return(
  <>
   <section className="mt12 px4 px10-sm px20-md">
    <h2 className="fs8 text-center ff-rubik mb8"> EXPERIENCE</h2>
    <div className="d-grid gap-4 gr2-sm">{experience.map((experience)=>(
     <div className="bg-gray10 rounded-4 hover-grow p4">
      <h3 className="ff-montserrat-bold fs4">{experience.role}</h3>
      <div className="fs1 fw-bold text-green">{experience.name} <span className="fs1 opacity75"><span className="fw-bolder ff-rubik me1">&middot;</span>{experience.date}</span> </div>
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
