import { motion } from "framer-motion";
import { GiAchievement } from "react-icons/gi";
const Achievement = () => {
  return (
    <div>
      <div className="border-b border-neutral-500 pb-4">
        <h1 className="text-4xl text-center my-20">Achievements</h1>

        {/* achievement  */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center flex-col gap-5"
              >
                <GiAchievement className="text-7xl"></GiAchievement>
                <h3 className="text-4xl">Academic Scholarship Recipient</h3>
              </motion.div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <div className="flex justify-center lg:justify-start ">
              <motion.p
                className="my-2 max-w-xl py-6 text-[20.3px] text-justify"
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                Awarded a merit-based scholarship at American International
                University - Bangladesh for consistently achieving strong
                academic results. Starting with a 30% tuition discount in my 4th
                semester, the scholarship increased to 50% as my performance
                improved. This recognition highlights my dedication to academic
                excellence and my ability to maintain a consistent focus on
                achieving my goals despite challenges.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
