import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../higher-order-component";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{ max: 45, scale: 1, speed: 450 }}
          className="bg-tertary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />

          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px]"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I'm a passionate web developer with a love for technology and a keen eye
        for creating awe-inspiring digital experiences. My journey into the tech
        industry began with HTML, CSS, and JavaScript. What was just a hobby in
        the beginning is now my biggest passion. Back then, I didn't quite trust
        myself to actually work in IT. Today, I cannot imagine myself working
        anywhere else. As I dived deeper into the world of coding, I embraced
        the power of version control with Git and GitHub and learned everything
        I could about client- and server-side JavaScript. To boost my
        server-side skills, I also ventured into Node.js and Express.js,
        crafting robust and scalable web applications backed by the dynamic
        MongoDB database. My frontend process extends to crafting user
        interfaces with React, breathing life into every pixel. Passionate about
        staying at the forefront of innovation, I'm constantly eager to learn,
        adapt, and push the boundaries of what's possible in the ever-evolving
        tech landscape.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
