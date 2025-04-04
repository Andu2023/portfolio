import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { motion } from 'framer-motion';
import { fadeIn } from '../utils/motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <motion.footer
      variants={fadeIn("up", "spring", 0.5, 0.75)}
      className='rounded-2xl bg-black-100'
    >
      <div className={`${styles.padding} bg-tertiary rounded-2xl min-h-[100px] flex justify-between items-center flex-wrap gap-5`}>
        <div>
          <p className='text-white font-bold text-[24px]'>Andualem Assefa</p>
          <p className='mt-1 text-gray-300'>Senior Full Stack Developer</p>
        </div>
        
        <div className='flex gap-5'>
          <a
            href="https://github.com/Andu2023"
            target="_blank"
            rel="noopener noreferrer"
            className='transition-colors text-secondary hover:text-white'
          >
            <FaGithub size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/andualem-assefa/"
            target="_blank"
            rel="noopener noreferrer"
            className='transition-colors text-secondary hover:text-white'
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="mailto:andy2023user@gmail.com"
            className='transition-colors text-secondary hover:text-white'
          >
            <FaEnvelope size={24} />
          </a>
        </div>
      </div>
      
      <div className='flex justify-center items-center py-5 w-full'>
        <p className='text-secondary text-[14px]'>
          © {new Date().getFullYear()} Andualem Assefa. All rights reserved.
          <hr />
        </p>
      </div>
    </motion.footer>
  );
};

export default SectionWrapper(Footer, "footer");
