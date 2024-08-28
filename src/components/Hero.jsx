import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { ngsiuwa } from "../assets";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-4
        `}
      >
        {/* Purple vertical bar */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm 
            {/* TODO: Rgb gradient transition for name */}
            <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
              Tommy NG
            </span>  
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 mt-10`}>
            A software engineer  
          </p>
          <p className={`${styles.heroSubText} mt-2 text-white-100 mt-3`}>
            Specialize in AI applications & Full-Stack development
          </p>
        
           
        </div>
        
        {/* Circular icon */}
        <div className="flex flex-col justify-left mt-5  ml-20" style={{ width: '270px'}}>
          <img src={ngsiuwa} alt="headshot" className="rounded-full border-4 border-[rgb(255, 0, 0)] max-w-1xl" />
        </div>
      </div>
      
      <ComputersCanvas className="mt-5"/>
      
      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
