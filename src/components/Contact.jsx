


const Contact = ({text})=>{

 return(
  <>
   <section className="mt8" id="contact">
    <h3 className="ff-rubik fs9 mb5 text-center">CONTACT</h3>
    <div className="text-center mb3 opacity75 fs2">Let's build something amazing together.</div>
    <div className="flex content-center fs7 gr-auto gap-4">
     <a href="mailto:mubarakcodes@gmail.com" className={`${text}`} target="_blank"><i className={`fa-solid fa-envelope click-fade click-grow`}></i></a>
     <a href="https://wa.me/+2347062902419" className={`${text}`} target="_blank"><i class="fa-brands fa-whatsapp click-grow click-fade"></i></a>
     <a href="tel:+2347062902419" className={`${text}`} target="_blank"><i class="fa-solid fa-phone click-fade click-grow"></i></a>
    </div>
   </section>
  </>
 )
};

export default Contact;
