import { motion } from "framer-motion";
import img1 from "../../assets/education/WhatsApp Image 2024-12-13 at 12.59.37 AM.jpeg";
import img2 from "../../assets/education/WhatsApp Image 2024-12-13 at 12.59.38 AM.jpeg";
const Education = () => {
  return (
    <div>
      <div className="border-b border-neutral-500 pb-4 mt-10 lg:mt-0">
        <h1 className="text-4xl text-center my-20">Education</h1>
        {/* university  */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={img2}
                alt="about"
                className="rounded-2xl max-w-lg"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <motion.p
                className="my-2 max-w-xl py-6 text-[20.3px]"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                BSc. in Computer Science and Engineering American International
                University - Bangladesh
                <br />
                <br />
                2022 - Present
              </motion.p>
            </div>
          </div>
        </div>
        {/* inter  */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={img1}
                alt="about"
                className="rounded-2xl max-w-lg"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <motion.p
                className="my-2 max-w-xl py-6 text-[20.3px]"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Higher Secondary Certificate (HSC) Jamuna Sar Karkhana School &
                Collage
                <br />
                <br />
                2019 - 2021
                <br />
                Group- Science
              </motion.p>
            </div>
          </div>
        </div>
        {/* ssc  */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.img
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                src={img1}
                alt="about"
                className="rounded-2xl max-w-lg"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start">
              <motion.p
                className="my-2 max-w-xl py-6 text-[20.3px]"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Secondary School Certificate (SSC) Jamuna Sar Karkhana School &
                Collage
                <br />
                <br />
                2017 - 2019
                <br />
                Group- Science
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;