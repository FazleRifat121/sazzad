import React from "react";
import { motion } from "framer-motion";
import { FaJava } from "react-icons/fa";
import { MdFlutterDash } from "react-icons/md";
const Skill = () => {
  return (
    <div>
      <div className="border-b border-neutral-500 pb-4">
        <h1 className="text-4xl text-center my-20">Skill</h1>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <FaJava className="text-7xl"></FaJava>
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
        <div className="flex flex-wrap">
          <div className="w-full lg:w-1/2 lg:p-8">
            <div className="flex items-center justify-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <MdFlutterDash className="text-7xl"></MdFlutterDash>
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
