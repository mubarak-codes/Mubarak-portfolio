import {useQuery} from '@tanstack/react-query';
import {useState, useEffect} from 'react'
import projects from '../data/Projects.json'


const Project = ({bg, text,})=>{

 

 return(
  <>
   <section className="mt12 px5 px10-sm px19-md" id="projects">
    <h2 className="text-center mb8 fs9 txt-bolder ff-montserrat-bold">My Projects</h2>
    <div className=" gap-4 d-grid gr2-sm">
     {projects.map((project)=>(
      <div className={`b b-gray50 rounded-4 flex p5  ${text} d-col`} key={project.id}>
         <img src={project.image} className="w100 br2 b obj-cover items-start mb5" />
        <h4 className="ff-montserrat-bold mb2 fs3">{project.title}</h4>
        <div className="mb2 fs1 opacity75">{project.description.substring(0, 80)}...</div>
      <div>
        <a href={project.link} className={`fs2 text-green b b-green opacity75 click-fade click-grow link cursor-pointer p1 px2 br2 me20`} target="_blank">Visit Website <i className="bi bi-arrow-up-right vertical-center"></i> </a></div> <hr/>
        <div className="mt2 fs1 opacity75  ">{project.stack}</div>
      </div>
     ))}
    </div>
   </section>
  </>
 )
}



export default Project;
