import {useQuery} from '@tanstack/react-query'; 


const Project = ({bg, text,})=>{
 const {data: projects, isLoading} = useQuery({
  queryFn: fetchProjects,
  queryKey: ["projects"]
 });

 return(
  <>
   <section className="mt-5 px-4 px-sm-5" id="projects">
    <h2 className="text-center ff-rubik mb-4 mfs-9">PROJECT</h2>
    <div className=" gap-4 d-grid gr-2-sm">
     {projects?.map((project)=>(
      <div className={`bg-success bg-opacity-10 border border-success border-opacity-50 rounded-4  d-flex p-3  ${text}`} key={project.id}>
       <div className="">
        <h4 className="ff-montserrat-bold mb-2 mfs-4">{project.title}</h4>
        <div className="mb-2 mfs-2 opacity-75">{project.description}</div>
        <div className="mb-2 mfs-2 fw-semibold ">{project.stack}</div>
        <a href={project.link} className={`mfs-1 ${text} opacity-75 click-fade click-grow`} target="_blank">Visit Website</a>
       </div>
      </div>
     ))}
    </div>
   </section>
  </>
 )
}

const fetchProjects = ()=>{
 try{
  return fetch('http://localhost:8000/projects')
   .then(res=>res.json())
   .then(data=>{
    return data})
 } catch(error){
  console.log(error)
 }
}

export default Project;
