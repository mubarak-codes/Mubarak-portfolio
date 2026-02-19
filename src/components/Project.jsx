import {useQuery} from '@tanstack/react-query';
import {useState, useEffect} from 'react'
import projects from '../data/Projects.json'


const Project = ({bg, text,})=>{

 

 return(
  <>
   <section className="mt12 px5 px10-sm px19-md" id="projects">
    <h2 className="text-center mb-2 text-2xl opacity-75 txt-bolder ff-montserrat-bold">My Projects</h2>
    <div className=" gap-4 d-grid gr2-sm">
     {projects.map((project)=>(
      <div className={`flex p5  ${text} d-col`} key={project.id}>
         <img src={project.image} className="w100 border-1 border-gray-400/40 obj-cover items-start mb5 p-2" />
        <h4 className=" mb2 font-black opacity-75 text-2xl">{project.title}</h4>
        <div className="mb2 text-sm opacity-50">{project.description.substring(0, 80)}...</div>
      <div>
      <div className="my2 mb5 fs1 opacity75  ">{project.stack}</div>

        <a href={project.link} className={`link bg-gray-500/20 click-fade link-inherit p-2 rounded-sm cursor-pointer opacity-75`} target="_blank">Visit Website <i className="bi bi-arrow-up-right vertical-center"></i> </a>
      <a href={project.github} target="_blank">
              <i className={`fa-brands fa-github bg-gray-500/20 p-2 rounded-full ${text} click-grow ml-3 opacity-75`}></i>
            </a>
</div>
           </div>
     ))}
    </div>
   </section>
  </>
 )
}



export default Project;
