
import React, { useState } from 'react'
import Avatar from '../assets/avatar.jpg'
import { motion } from 'framer-motion'
import { BsArrowRight } from "react-icons/bs"
import { SiBilibili } from "react-icons/si"
import { FaGithubSquare } from "react-icons/fa"
import { useSectionInView } from '../lib/hooks'
import { useActiveSectionContext } from '../context/activeSectionContext'
import { HiDownload } from 'react-icons/hi'
import { appsData } from '../lib/data'

const Intro = () => {
  const { ref } = useSectionInView("主 页", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const [ count, setCount ] = useState(0)

  return (
    <section ref={ref} id="home"
    className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <img 
              className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-gray shadow-xl'
              src={Avatar}
              alt='portrait'
              onClick={() => setCount(count+1) }
            />
          </motion.div>

          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>

      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        全栈工程师,
        <span className="font-bold"> 10 </span> 年开发经验。喜欢创建<span className="italic">网站 & 管理系统 & 安卓App & Game</span>。
      </motion.h1>

      <motion.div
        className="flex flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <a
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("联 系");
            setTimeOfLastClick(Date.now());
          }}
        >
          联 系 我
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </a>


        <a
          className="bg-white mx-3 p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://space.bilibili.com/386081713/dynamic"
          target="_blank"
        >
          <SiBilibili />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/BinerKang?tab=repositories"
          target="_blank"
        >
          <FaGithubSquare />
        </a>

      </motion.div>

      
      <motion.div
        className="flex flex-row items-center justify-center gap-4 px-4 mt-10 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {
          appsData.slice(0, (count != 0 && count%6 == 0) ? appsData.length : 1).map((app, i) => (
            <React.Fragment key={i}>
              <DownloadItem {...app} />
            </React.Fragment>
          ))
        }
          
      </motion.div>
    </section>
  )
}

export default Intro

const DownloadItem = ({ imageUrl, link }) => {
  return <div className="flex flex-col items-center gap-4">
          <img 
              className='w-24'
              src={imageUrl}
              alt='portrait'
            />

          <a
              className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
              href={link}
              download
            >
              下载
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
        </div>
}