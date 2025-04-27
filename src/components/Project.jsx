import {useQuery} from '@tanstack/react-query';
import {useState, useEffect} from 'react'
import projects from '../data/Projects.json'


const Project = ({bg, text,})=>{

 

 return(
  <>
   <section className="mt12 px4 px10-sm px20-md" id="projects">
    <h2 className="text-center ff-rubik mb8 fs8">PROJECT</h2>
    <div className=" gap-4 d-grid gr2-sm">
     {projects.map((project)=>(
      <div className={`bg-green10 b b-green50 rounded-4 flex p4  ${text}`} key={project.id}>
       <div className="">
        <h4 className="ff-montserrat-bold mb2 fs3">{project.title}</h4>
        <div className="mb2 fs2 opacity75">{project.description}</div>
        <div className="mb2 fs1 fw-semibold ">{project.stack}</div>
        <a href={project.link} className={`fs1 ${text} opacity75 click-fade click-grow hover-text-underline`} target="_blank">Visit Website</a>
       </div>
      </div>
     ))}
    </div>
   </section>
  </>
 )
}



export default Project;
