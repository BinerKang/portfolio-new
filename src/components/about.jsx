import { motion } from "framer-motion";
import SectionHeading from './section-heading';
import { useSectionInView } from '../lib/hooks';

const About = () => {
  const { ref } = useSectionInView("关 于");
  
  return (
    <motion.section
      ref={ref}
      className="mb-20 max-w-[45rem] text-leftleading-8 sm:mb-32 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>关 于 我</SectionHeading>
      <ul className='my-3 mx-5 list-disc text-sm sm:text-base flex flex-col gap-2'>
        <li >擅长后端开发，主要技术: SpringBoot、SpringMVC、MyBatis</li>
        <li>熟练前端开发，主要技术:React、Next.js、MUI、TailwindCSS</li>
        <li>熟练掌握数据库，主要技术:PostgreSQL、MySQL、Redis、MongoDB</li>
        <li>熟练掌握中：Android 开发(Jetpack Compose)</li>
        <li>爱 好：UE5游戏开发，学习中...</li>
      </ul>
     
    </motion.section>
  )
}

export default About