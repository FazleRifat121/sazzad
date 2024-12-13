import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import { RiFlutterFill } from "react-icons/ri";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { MdOutlineSyncProblem } from "react-icons/md";
import { FaTeamspeak } from "react-icons/fa6";
import { SiCplusplus } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";
import { IoBulb } from "react-icons/io5";
const Skill = () => {
  return (
    <div>
      <div className="border-b border-neutral-500 pb-4">
        {/* technical skiil  */}
        <h1 className="text-4xl text-center my-20">
          Technical <span className="text-neutral-500">Skills</span>
        </h1>

        {/* Flutter  */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center flex-col gap-5"
              >
                <RiFlutterFill className="text-7xl"></RiFlutterFill>
                <h3 className="text-4xl">Flutter(Dirt)</h3>
              </motion.div>
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
                Proficient in building cross-platform mobile applications using
                Flutter, with expertise in Dart programming. I specialize in
                creating responsive, feature-rich applications with intuitive
                user interfaces. I have hands-on experience integrating REST
                APIs, implementing state management solutions like Provider, and
                utilizing Firebase for backend services. My projects, such as
                the Roll Dice App, highlight my ability to deliver engaging,
                functional mobile apps.
              </motion.p>
            </div>
          </div>
        </div>
        {/* Java */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center flex-col gap-5"
              >
                <FaJava className="text-7xl"></FaJava>
                <h3 className="text-4xl">Java</h3>
              </motion.div>
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
                Strong foundation in Object-Oriented Programming (OOP) with
                Java, enabling me to design and implement scalable, modular, and
                maintainable software solutions. I developed UniGuide, a
                university admission guide app, using Java, where I focused on
                data organization and seamless user experience.
              </motion.p>
            </div>
          </div>
        </div>
        {/* C# */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center flex-col gap-5"
              >
                <TbBrandCSharp className="text-7xl"></TbBrandCSharp>
                <h3 className="text-4xl">C#</h3>
              </motion.div>
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
                Skilled in developing desktop applications and systems using C#.
                I built an Inventory Management System with complete CRUD
                functionalities, tackling challenges like database connectivity
                and debugging effectively. My work in C# emphasizes clean code
                and user-friendly interfaces.
              </motion.p>
            </div>
          </div>
        </div>
        {/* C++ */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center flex-col gap-5"
              >
                <SiCplusplus className="text-7xl"></SiCplusplus>
                <h3 className="text-4xl">C++</h3>
              </motion.div>
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
                Experienced in using C++ for competitive programming and
                algorithm development. My skills include writing efficient,
                high-performance code to solve complex problems, which
                strengthens my logical thinking and coding efficiency.
              </motion.p>
            </div>
          </div>
        </div>
        {/* HTML & CSS */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center flex-col gap-5"
              >
                <div className="flex justify-center items-center flex-row">
                  <FaHtml5 className="text-7xl"></FaHtml5>
                  <p className="text-7xl">&nbsp;&&nbsp;</p>
                  <FaCss3 className="text-7xl"></FaCss3>
                </div>
                <h3 className="text-4xl">HTML & CSS</h3>
              </motion.div>
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
                Proficient in designing structured and visually appealing web
                pages with HTML and CSS. My focus is on creating responsive,
                user-friendly designs that enhance user engagement and
                accessibility.
              </motion.p>
            </div>
          </div>
        </div>
        {/* softskills */}
        <h1 className="text-4xl text-center my-20">
          Soft <span className="text-neutral-500">Skills</span>
        </h1>
        {/* Adaptability */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center flex-col gap-5"
              >
                <IoBulb className="text-7xl"></IoBulb>
                <h3 className="text-4xl">Adaptability</h3>
              </motion.div>
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
                I quickly adapt to new technologies, tools, and challenges. For
                example, during my Inventory Management System project, I faced
                issues connecting to the database. I learned new techniques and
                resolved the problem efficiently. My willingness to learn and
                evolve ensures I can handle dynamic work environments
                effectively.
              </motion.p>
            </div>
          </div>
        </div>
        {/* Teamwork */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center flex-col gap-5"
              >
                <BsMicrosoftTeams className="text-7xl"></BsMicrosoftTeams>
                <h3 className="text-4xl">Teamwork</h3>
              </motion.div>
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
                I excel at working collaboratively in teams, as shown in my
                UniGuide project, where I shared responsibilities with a
                teammate to meet project deadlines. I value open communication,
                mutual respect, and effective collaboration to achieve shared
                goals.
              </motion.p>
            </div>
          </div>
        </div>
        {/* Problem-Solving */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center flex-col gap-5"
              >
                <MdOutlineSyncProblem className="text-7xl"></MdOutlineSyncProblem>
                <h3 className="text-4xl">Problem-Solving</h3>
              </motion.div>
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
                I enjoy tackling technical challenges, whether debugging code or
                optimizing performance. For instance, while building the Roll
                Dice App, I resolved issues with random number generation by
                thoroughly researching Dart’s libraries and testing my
                solutions. I approach every problem with a methodical mindset to
                ensure efficiency.
              </motion.p>
            </div>
          </div>
        </div>
        {/* Communication */}
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center items-center flex-col gap-5"
              >
                <FaTeamspeak className="text-7xl"></FaTeamspeak>
                <h3 className="text-4xl">Communication</h3>
              </motion.div>
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
                Strong communication skills developed through organizing events
                as a member of the AIUB Performing Arts Club. I coordinated
                effectively with team members and ensured everyone stayed
                aligned with the objectives. I apply the same clear and concise
                communication in professional and team settings to ensure smooth
                collaboration.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
