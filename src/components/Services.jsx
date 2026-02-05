const Services = () => {
 return (
  <>
   <section id="services" className="mt10 ps10-sm ps19-md px4">
    <h2 className="mb6 fs9 txt-bolder txt-center txt-start-sm">Services</h2>
    <div className="flex d-col nowrap gap2">
     {/*front end Developer*/}
      <div className=" fs4 mb3 bg-gray10 p4 br2">
       <h3 className='fs5 txt-bold'>Front-End Developer</h3>
       <div>Crafting responsive, interactive web experiences</div>
  </div>

    {/*back end Developer*/}
      <div className=" fs4 mb3 bg-gray10 p4 br2">
      <h3 className="fs5 txt-bold">Back-End Developer</h3>
      <div>Building secure APIs, servers & database systems</div>
  </div>
    </div>
   </section>
  </>
  )
}

export default Services;
