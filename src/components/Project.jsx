import {useQuery} from '@tanstack/react-query';
import {useState, useEffect} from 'react'
import projects from '../data/Projects.json'


const Project = ({bg, text,})=>{

 

 return(
  <>
   <section className="mt12 px5 px10-sm px19-md" id="projects">
    <h2 className="text-center ff-rubik mb8 fs8">PROJECT</h2>
    <div className=" gap-4 d-grid gr2-sm">
     {projects.map((project)=>(
      <div className={`b b-gray50 rounded-4 flex p5  ${text}`} key={project.id}>
       <div className="">
        <div className="mb7 h150px-sm h200px-md">
         <img src={project.image} className="w100 br2 b h100 " />
        </div>
        <h4 className="ff-montserrat-bold mb2 fs3">{project.title}</h4>
        <div className="mb2 fs2 opacity75">{project.description.substring(0, 80)}...</div>
        <a href={project.link} className={`fs1 ${text} opacity75 click-fade click-grow link-inherit cursor-pointer `} target="_blank">Visit Website <i className="bi bi-arrow-up-right vertical-center"></i> </a> <hr/>
        <div className="mt2 fs1 opacity75 fw-semibold ">{project.stack}</div>
       </div>
      </div>
     ))}
    </div>
   </section>
  </>
 )
}



export default Project;
