const Services = () => {
 return (
  <>
   <section id="services" className="mt12 px5 px10-sm px19-md">
    <h2 className="mb8 ff-rubik fs8 txt-center">SERVICES</h2>
    <div className="d-grid gr2-sm gap4">
     {/*front end Developer*/}
     <div className="b p4 br3 pb2">
      <h4 className="ff-rubik fs4 mb3">Front-End Developer</h4>
      <p className="fs2 opacity75">I have 3+ years of experience in front-end development. I create visually appealing and user-friendly websites using HTML, CSS, Bootstrap, Javascript, Typescript, React, Angular and my CSS framework MkCSS".</p>
     </div>

    {/*back end Developer*/}
     <div className="b p4 br3 pb2">
      <h4 className="ff-rubik fs4 mb3">Back-End Developer</h4>
      <p className="fs2 opacity75">
      With 2+ years of experience in back-end development, I design and build robust, scalable server-side applications using Python, Django, and PostgreSQL.</p>
    </div>
    </div>
   </section>
  </>
  )
}

export default Services;
