import img from "../../assets/my photo.jpg";
import { motion } from "framer-motion";
import About from "../about/About";
const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: delay },
  },
});
const Banner = () => {
  return (
    <div className="md:hero h-screen">
      <div className="max-w-[1280px] flex items-center justify-center flex-col lg:flex-row-reverse gap-x-20">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          src={img}
          className="max-w-sm md:max-w-lg rounded-full my-14"
        />
        <div>
          {/* h1  */}
          <motion.h1
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-4xl font-bold"
          >
            Hi, I’m Sazzad!
          </motion.h1>
          {/* h2  */}
          <motion.h2
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="text-3xl font-bold pt-6 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent  text-justify"
          >
            A Flutter Mobile App Developer passionate about creating seamless,
            user-focused mobile experiences.
          </motion.h2>
          {/* p  */}
          <motion.p
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="py-6 text-[20.3px]  text-justify "
          >
            As a passionate and dedicated Flutter developer, I aim to create
            innovative and user-friendly mobile applications that solve
            real-world problems. With a strong foundation in Flutter development
            and a commitment to continuous learning, I strive to contribute to
            dynamic projects and grow as a developer while delivering
            high-quality, efficient solutions.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
