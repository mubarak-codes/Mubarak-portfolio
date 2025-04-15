import experience from '../data/Experience'


const Experience = ()=>{

 return(
  <>
   <section className="px-4 px-sm-5">
    <h2 className="mfs-9 text-center ff-rubik mt-5 mb-4"> EXPERIENCE</h2>
    <div className="d-grid gap-3 gr-2-sm">{experience.map((experience)=>(
     <div className="bg-success bg-opacity-10 rounded-4 p-3">
      <h3 className="ff-montserrat-bold mfs-4">{experience.role}</h3>
      <div className="mfs-1 fw-bold">{experience.name}</div>
      <div className="opacity-75 mfs-2 py-2">{experience.description}</div>
      <div className="mfs-1 opacity-75"><i className="bi bi-geo-alt me-1 fw-bold"></i>{experience.location}</div>
     </div>
     ))}
    </div>
   </section>
  </>
 )
};

export default Experience;
