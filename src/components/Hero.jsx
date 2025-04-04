import { styles } from '../styles';

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, Im <span className="text-[#915eff]">Andualem Assefa</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          Full Stack Software developer<br className="sm:block hidden" />
          building scalable, efficient, and user-friendly applications<br />
          using a range of technologies.
          </p>
          <div className="flex items-center m-5">
  <a 
    href="/Andualem assefa_Resume.pdf" 
    download="Andualem assefa_Resume.pdf" 
    className="rounded-full cursor-pointer text-white bg-[#915eff] h-10 w-40 p-2 flex items-center justify-center transition-transform duration-300 ease-in-out hover:scale-105"
  >
    Download Resume
  </a>
</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
