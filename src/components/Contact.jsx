


const Contact = ({text})=>{

 return(
  <>
   <section className="mt12" id="contact">
    <h3 className="txt-bolder fs9 mb7 text-center ff-montserrat-bold">Contacts</h3>
    <div className="text-center mb4 opacity75 fs2">Let's build something amazing together</div>
    <div className="flex d-col gap-3 items-center fs7 opacity75">
     <div className="flex gap-3 d-col d-row-sm content-center">
      <a href="mailto:mubarakcodes@gmail.com" className={` bg-green cursor-pointer fs2 b b-green p1 text-snow link px2`} target="_blank"><i className={`fa-solid fa-envelope hover-fade click-grow me2 fs4 vertical-center`}></i>mubarakcodes@gmail.com</a>
      <a href="https://wa.me/+2347062902419" className={` bg-green cursor-pointer link text-snow fs2 b b-green p1 px2 text-center mx9 mx1-sm`} target="_blank"><i class="fa-brands fa-whatsapp click-grow hover-fade me2 fs4 vertical-center"></i>+2347062902419</a>
     </div>
     <a href="tel:+2347062902419" className={` cursor-pointer bg-green fs2 b b-green link text-snow p1 px2`} target="_blank"><i class="fa-solid fa-phone hover-fade click-grow me2 fs4 vertical-center"></i>+2347062902419</a>
    </div>
   </section>
  </>
 )
};

export default Contact;
