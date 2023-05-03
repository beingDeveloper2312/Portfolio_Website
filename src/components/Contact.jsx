import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from '@emailjs/browser';
import { styles } from '../styles';
import { EarthCanvas } from "./canvas";
import SectionWrapper  from "../hoc";
import { slideIn } from "../utils/motion";
const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setForm({...form, [name]: value})
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs.send("service_oeffako", 
    "template_dl45gn3", 
    {
      from_name: form.name,
      to_name: 'Rohit',
      from_email: form.email,
      to_email: 'jaiswalrohit8319@gmail.com',
      message: form.message,
    },
    "SRQPYVzkAdvy-krNB"
    )
    .then(() => {
      setLoading(false);
      alert('Goal!! Will get back to you as soon as possible');
      setForm({
        name: '',
        email: '',
        message: '',
      })
    }, (error) => {
      setLoading(false);
      console.log(error);
      alert('Something Went Wrong!')
    })
  }


  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
       <motion.div
         variants = {slideIn('left', 'tween', 0.2, 1)}
         className = "flex-[0.75] p-8 rounded-2xl shadow backdrop-blur-sm  border-2 border-[#4f200d]"
       >
         <p className={styles.sectionSubText}>Get in touch</p>
         <h3 className={styles.sectionHeadText}>Contact.</h3>
         <form
            ref={formRef}
            onSubmit = {handleSubmit}
            className = "mt-12 flex flex-col gap-8"
         >
           <label className="flex flex-col">
            <span className="text-[#4f200d] font-medium mb-4">
              Your Name
            </span>
            <input
                type = "text"
                name = "name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-[#f2ede9] py-4 px-6 placeholder:text-secondary 
                text-secondary rounded-lg outlined-none border-2 border-[#4f200d] font-medium"
            />
           </label>
           <label className="flex flex-col">
            <span className="text-[#4f200d] font-medium mb-4">
             Your Email Id
            </span>
            <input
                type = "email"
                name = "email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-[#f2ede9] py-4 px-6 placeholder:text-secondary 
                text-secondary rounded-lg outlined-none border-2 border-[#4f200d] font-medium"
            />
           </label>
           <label className="flex flex-col">
            <span className="text-[#4f200d] font-medium mb-4">
             Your Message
            </span>
            <textarea
                rows = "7"
                name = "message"
                value={form.message}
                onChange={handleChange}
                placeholder="Any words from you matters a lot!"
                className="bg-[#f2ede9] py-4 px-6 placeholder:text-secondary 
                text-secondary rounded-lg outlined-none border-[#4f200d] border-2 font-medium"
            />
           </label>
           <button type="submit"
              className="bg-tertiary text-[#4f200d] py-3 px-8 outline-none shadow-md shadow-primary 
              rounded-xl"
           >
              {loading ? 'In the air....' : 'Kick to my inbox'}
           </button>
         </form>
       </motion.div>
       <motion.div
         variants={slideIn('right', "tween", 0.2, 1)}
         className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
       >
         <EarthCanvas/>
       </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, "contact")