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
        className="mt-4 text-secondary text-[18px] max-w-3xl leading-[30px] text-justify"
        variants={fadeIn("", "", 0.1, 1)}
      >
        I'm a web developer with a knack for tech and creating digital
        experiences. My tech journey started with HTML, CSS, and JavaScript.
        What was a just a hobby at first, turned into a real passion. I used to
        doubt if I could really make it in the IT world, but now I cannot see
        myself anywhere else. As I dived deeper into coding, I discovered the
        efficiency of Git and GitHub for version control, and I learned a lot
        about client- and server-side JavaScript. To level up my server-side
        skills, I explored Node.js and Express.js, building robust web apps
        powered by the dynamic MongoDB database. On the frontend, I enjoy
        crafting user interfaces with React to bring every pixel to life. I'm
        always eager to learn and adapt, constantly pushing my own boundaries.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
      <div>
        <h2>some personal facts</h2>
        <ul>
          <li>i'm a pet lover - my spider is called Ruby. </li>
          <li>i'm in a committed relationship with my self-built PC.</li>
          <li>
            besides coding, I enjoy creating the funkiest Spotify playlists and
            drinking bloody marys.
          </li>
        </ul>
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
