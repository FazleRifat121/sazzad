import img from "../../assets/my photo.jpg";
import { motion } from "framer-motion";
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
      <div className="max-w-[1280px] flex items-center justify-center flex-col lg:flex-row-reverse ">
        <motion.img
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          src={img}
          className="w-[500px] md:max-w-xl rounded-lg "
        />
        <div>
          {/* h1  */}
          <motion.h1
            variants={container(0.5)}
            initial="hidden"
            animate="visible"
            className="text-5xl font-bold"
          >
            Hi, I’m Sazzad!
          </motion.h1>
          {/* h2  */}
          <motion.h2
            variants={container(1)}
            initial="hidden"
            animate="visible"
            className="text-3xl font-bold pt-6 bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text tracking-tight text-transparent"
          >
            A Flutter Mobile App Developer passionate about creating seamless,
            user-focused mobile experiences.
          </motion.h2>
          {/* p  */}
          <motion.p
            variants={container(1.5)}
            initial="hidden"
            animate="visible"
            className="py-6  "
          >
            I specialize in designing and developing innovative solutions using
            Flutter and Dart. Explore my journey, projects, and skills as I work
            toward building the future of mobile applications.
          </motion.p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
