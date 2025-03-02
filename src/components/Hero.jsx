import { motion } from "framer-motion";
import { styles } from "../styles.js";
import { ComputersCanvas, LaptopCanvas, TriangleCanvas } from "./canvas";
import { Text3D } from "@react-three/drei";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[90px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm
            <span className="text-[#915eff]"> Maryam</span>
            {/* <Text3D>Maryam</Text3D> */}
          </h1>
          {/* <TriangleCanvas /> */}
          <p className={`${styles.heroSubText} mt-1 text-white-100`}>
            I specialize in creating dynamic 3D visuals, <br />
            user interfaces, <br />
            and web applications with React.js, Next.js and Vue.js.
          </p>
        </div>
      </div>
      <LaptopCanvas />
      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
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
