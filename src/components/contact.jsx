import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import SubmitBtn from "./submit-btn";
import { useSnackbar } from 'notistack';

export default function Contact() {
  const { ref } = useSectionInView("联 系");
  const [isPending, setIsPending] = useState(false)
  const { enqueueSnackbar } = useSnackbar()
  const handleSubmit = async e => {
    e.preventDefault()

    setIsPending(true)
    
    try {
      enqueueSnackbar('消息发送成功!', { variant: 'success', autoHideDuration: 3000})

    } catch (err) {
      enqueueSnackbar('消息发送失败!', { variant: 'error'})
    } finally { 
      setIsPending(false)
    }
      
  }

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>联 系 我</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        请直接使用邮箱 
        <a className="underline" href="mailto:kangbain@qq.com">
          kangbain@qq.com
        </a> 
        联系 或 使用下面的表单。
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-10 flex flex-col dark:text-black"
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="你的邮箱"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="你的消息"
          required
          maxLength={5000}
        />
        <SubmitBtn pending={isPending}/>
      </form>
    </motion.section>
  );
}
