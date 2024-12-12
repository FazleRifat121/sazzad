import React from "react";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import { MdFlutterDash } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { BsMicrosoftTeams } from "react-icons/bs";
import { MdOutlineSyncProblem } from "react-icons/md";
import { RiSpeakAiFill } from "react-icons/ri";
const Skill = () => {
  return (
    <div>
      <div className="border-b border-neutral-500 pb-4">
        <h1 className="text-4xl text-center my-20">Skill</h1>
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
                Java is a versatile, object-oriented programming language widely
                used for building platform-independent applications. Developed
                by Sun Microsystems in 1995 (now owned by Oracle), Java's "write
                once, run anywhere" capability allows code to run on any device
                with a Java Virtual Machine (JVM). It is commonly used for web
                development, mobile apps (especially Android), enterprise
                software, and server-side applications. Known for its
                simplicity, robustness, and extensive libraries, Java remains a
                popular choice for developers worldwide.
              </motion.p>
            </div>
          </div>
        </div>
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
                <MdFlutterDash className="text-7xl"></MdFlutterDash>
                <h3 className="text-4xl">Flutter</h3>
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
                Flutter is an open-source UI software development kit (SDK)
                created by Google for building natively compiled applications
                across multiple platforms, including mobile (iOS and Android),
                web, and desktop (Windows, macOS, and Linux) from a single
                codebase. It uses the Dart programming language and features a
                rich set of pre-designed widgets for creating visually appealing
                and high-performance user interfaces. Flutter's hot-reload
                functionality enables developers to see changes in real-time,
                enhancing productivity. It's widely used for its flexibility,
                fast development cycle, and ability to deliver consistent
                experiences across different platforms.
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
                <MdFlutterDash className="text-7xl"></MdFlutterDash>
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
                Experienced in using C++ for competitive programming and
                algorithm development. My skills include writing efficient,
                high-performance code to solve complex problems, which
                strengthens my logical thinking and coding efficiency.
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
                <MdFlutterDash className="text-7xl"></MdFlutterDash>
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
                <MdFlutterDash className="text-7xl"></MdFlutterDash>
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
                <RiSpeakAiFill className="text-7xl"></RiSpeakAiFill>
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
                Flutter is an open-source UI software development kit (SDK)
                created by Google for building natively compiled applications
                across multiple platforms, including mobile (iOS and Android),
                web, and desktop (Windows, macOS, and Linux) from a single
                codebase. It uses the Dart programming language and features a
                rich set of pre-designed widgets for creating visually appealing
                and high-performance user interfaces. Flutter's hot-reload
                functionality enables developers to see changes in real-time,
                enhancing productivity. It's widely used for its flexibility,
                fast development cycle, and ability to deliver consistent
                experiences across different platforms.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
