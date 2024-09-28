
import React, { useEffect, useState } from 'react'
import Avatar from '../assets/avatar.jpg'
import { motion } from 'framer-motion'
import { BsArrowRight } from "react-icons/bs"
import { SiBilibili } from "react-icons/si"
import { FaGithubSquare } from "react-icons/fa"
import { useSectionInView } from '../lib/hooks'
import { useActiveSectionContext } from '../context/activeSectionContext'
import { HiDownload } from 'react-icons/hi'
import { useSnackbar } from 'notistack';

const Intro = () => {
  const { ref } = useSectionInView("主 页", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const { enqueueSnackbar } = useSnackbar()
  const [ count, setCount ] = useState(0)

  const [appsData, setAppsData] = useState([])

  useEffect(() => {
     const fetchData = async () => {
      try {
        const lastFetch = localStorage.getItem("lastFetchData")
        if (lastFetch != null) {
          const localData = JSON.parse(lastFetch)
          if ((new Date().getTime() - localData.time) < 60*60*1000) {
            console.log('use local')
            setAppsData(localData.apps)
            return
          }
        }
        const response = await fetch("https://8n0tzrqksi.execute-api.ap-southeast-1.amazonaws.com/default/findApps")
        
        const res = await response.json()
        // console.log('use Api:' + JSON.stringify(res))
        if (res) {
          setAppsData(res)
          localStorage.setItem("lastFetchData", JSON.stringify({time: new Date().getTime(), apps: res}))
        }
      
        // For Test
        // setAppsData([
        //   {"desc":"安卓手机应用-海量电影、电视剧，及时更新。","img":"https://utfs.io/f/4259bee3-4d76-4d83-9617-6bfcc591dcb1-l13fdx.svg","name":"花儿影视","url":"https://utfs.io/f/6b2b206e-e8bf-4d5f-a70f-cb9aeb314b02-gtsihv.apk","hide":false},
        //   {"_id":{"$oid":"65fbcfbf8a695255685e385b"},"desc":"悟道","img":"https://utfs.io/f/7e5af2df-b533-429f-ae61-1ced2eebee36-2xq.svg","name":"悟","url":"https://utfs.io/f/956657f9-7e6c-4aa5-95aa-5767138d6e7e-n7xrc5.apk","hide":false},
        //   {"desc":"安卓手机应用-海量电影、电视剧，及时更新。","img":"https://utfs.io/f/4259bee3-4d76-4d83-9617-6bfcc591dcb1-l13fdx.svg","name":"花儿影视","url":"https://utfs.io/f/6b2b206e-e8bf-4d5f-a70f-cb9aeb314b02-gtsihv.apk","hide":false},
         
        // ])
      } catch (err) {
        enqueueSnackbar('加载应用信息失败!', { variant: 'error'})
      } 
    }
    
    fetchData()
  }, [])

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
        className="flex flex-row  flex-wrap items-center justify-center gap-2 mt-10 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        {
          appsData.map((app, i) => (
            <DownloadItem key={i} {...app} count={count}/>
          ))
        }
          
      </motion.div>
    </section>
  )
}

export default Intro

const DownloadItem = ({ url, img, hide, desc, name, count }) => {
  return (count != 0 && count%6 == 0 || !hide ) && 
      <div className="flex flex-col w-40 sm:w-60 rounded-2xl items-center p-3 gap-4 bg-gray-200 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20">
          <img 
              className='h-24'
              src={img}
              alt='portrait'
            />

          <p className=''>
            {name}
          </p>
          <p className=' text-xs h-10'>
            {desc}
          </p>


          <a
              className="group px-5 py-2 text-sm flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer font borderBlack bg-gray-900 text-white"
              href={url}
              download
            >
              下载
              <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
            </a>
        </div>
}