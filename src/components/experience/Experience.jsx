import { motion } from "framer-motion";
import { FaGuitar } from "react-icons/fa";
import { VscOrganization } from "react-icons/vsc";
const Experience = () => {
  return (
    <div>
      <div>
        <div className="border-b border-neutral-500 pb-4">
          <h1 className="text-4xl text-center my-20">Experience</h1>

          {/* club  */}
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center items-center flex-col gap-5"
                >
                  <FaGuitar className="text-7xl"></FaGuitar>
                  <h3 className="text-4xl">Singer & Member</h3>
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
                  <span className="text-2xl">
                    AIUB Performing Arts Club (2022-2023)
                  </span>
                  <br />
                  <br />
                  As an active member and singer, I contributed to organizing
                  events and collaborated closely with team members. These
                  activities helped me develop strong communication, teamwork,
                  and organizational abilities, which are crucial for effective
                  collaboration and project management in mobile app
                  development.
                </motion.p>
              </div>
            </div>
          </div>

          {/* organization */}
          <div className="flex flex-wrap">
            <div className="w-full lg:w-1/2 lg:p-8">
              <div className="flex items-center justify-center">
                <motion.div
                  initial={{ x: -100, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="flex justify-center items-center flex-col gap-5"
                >
                  <VscOrganization className="text-7xl"></VscOrganization>
                  <h3 className="text-4xl">Volunteer</h3>
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
                  <span className="text-2xl">
                    Sheba Foundation (2021-Present)
                  </span>
                  <br />
                  <br />I played a role in organizing fundraising and
                  distributing resources during national crises, which helped me
                  grow in problem-solving, leadership, and empathy. These
                  experiences are beneficial when managing projects and
                  addressing challenges in mobile development, especially in
                  high-pressure environments.
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
