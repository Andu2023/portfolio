import { motion } from 'framer-motion';
import { styles } from '../styles';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';
import photo202 from '../assets/photo_202.png';

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>About Me</p> */}
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>
     <div className="mt-10 flex flex-wrap gap-20">
          <img src={photo202} alt="Logo" className="h-60 w-40 object-cover r" />
     <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-2 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Im an experienced Senior Full Stack Developer with a strong foundation in both .NET/C# and JavaScript ecosystems, specializing in TypeScript, React, Angular, Node.js, and Express.js. I excel in building scalable, high-performance web applications and implementing complex business logic, with experience leading development teams. My technical toolkit includes expertise in databases like MongoDB and PostgreSQL, containerization with Docker, and cloud platforms such as AWS and Azure. As a quick learner and proactive collaborator, Im dedicated to creating user-centric, efficient solutions that solve real-world challenges. Lets work together to bring your ideas to life!
      </motion.p>
     </div>
      
     <div className="aboumkills flex flex-col gap-5 m-10 pl-0 md:pl-60">
     
  <div className="about-skill flex gap-12 items-center transition-all">
    <p className="min-w-[150px] text-2xl font-medium">React</p>
    <hr className="w-1/2 h-2 rounded-full bg-gradient-to-r from-[#26460f] to-[#FF0903] border-none outline-none" />
  </div>
  <div className="about-skill flex gap-12 items-center transition-all">
    <p className="min-w-[150px] text-2xl font-medium">Angular</p>
    <hr className="w-1/2 h-2 rounded-full bg-gradient-to-r from-[#26460f] to-[#FF0903] border-none outline-none" />
  </div>
  <div className="about-skill flex gap-12 items-center transition-all">
    <p className="min-w-[150px] text-2xl font-medium">Asp.Net Web Api</p>
    <hr className="w-1/2 h-2 rounded-full bg-gradient-to-r from-[#26460f] to-[#FF0903] border-none outline-none" />
  </div>
  <div className="about-skill flex gap-12 items-center transition-all">
    <p className="min-w-[150px] text-2xl font-medium">Django</p>
    <hr className="w-1/2 h-2 rounded-full bg-gradient-to-r from-[#26460f] to-[#FF0903] border-none outline-none" />
  </div>
</div>

      
    </>
  );
};

export default SectionWrapper(About, "about");
