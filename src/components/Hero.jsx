import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { ngsiuwa } from "../assets";
import { useState } from "react";
import Chatbot from "./chatbot";
import { fadeIn } from "../utils/motion";
import axios from "axios";

const Hero = () => {

  const [finishFirstTyping, setFinishFirstTyping] = useState(false);

  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] mx-auto ${styles.paddingX} flex flex-row items-start gap-4` }
        style ={{ maxWidth: '1440px'}}
      >
        {/* Purple vertical bar */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915EFF]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        {/* Rgb gradient transition for name */}
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>
            Hi, I'm &nbsp;
            <span className="bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.indigo.400),theme(colors.indigo.100),theme(colors.sky.400),theme(colors.fuchsia.400),theme(colors.sky.400),theme(colors.indigo.100),theme(colors.indigo.400))] bg-[length:200%_auto] animate-gradient">
              Tommy NG
            </span>  
          </h1>

          {/* Typewriter animation for hero subtext*/}
          <div className="">

            {/* TODO: Fix the typewriter affect the icon issues */}
            { !finishFirstTyping ?
                <motion.p
                className={`${styles.heroSubText} text-white-100 mt-10 pr-2 relative w-[max-content] before:absolute before:inset-0 before:animate-typewriter before:bg-[#050815] after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white`}
                onAnimationEnd={() => setFinishFirstTyping(true)}
                >
                  A software engineer
                </motion.p>
              : 
                <motion.p className={`${styles.heroSubText} text-white-100 mt-10 pr-2 relative max-w-3xl`}>
                  A software engineer
                </motion.p>
            }
            { finishFirstTyping && (
              <motion.p className={`${styles.heroSubText} text-white-100 mt-3 pr-2 relative max-w-53rem  before:absolute before:inset-0 before:animate-typewriter before:bg-[#050815] after:absolute after:inset-0 after:w-[0.125em] after:animate-caret after:bg-white`}>
                Specialize in AI applications & Full-Stack development
              </motion.p>
            )}
          </div>
          <motion.div 
            variants={fadeIn("right", "spring", 0.1, 1 )}
            className={``}
            style={{}}>
            <Chatbot />
          </motion.div>
        </div>
        <div className="flex flex-row-reverse mt-5  ml-45 " style={{ width: '270px'}}>
          <img src={ngsiuwa} alt="headshot" className="rounded-full border-4 border-[rgb(255, 0, 0)]" />
        </div>
      </div>
      
      
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
