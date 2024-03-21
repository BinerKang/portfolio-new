import React from "react";
import { SiSpring } from "react-icons/si"
import { GrAndroid } from "react-icons/gr"
import { SiUnrealengine } from "react-icons/si"
import appImg from "../assets/app.jpg"
import glassedImg from "../assets/glasses.jpg"
import gameImg from "../assets/game.jpg"
import app1Image from '../assets/app1.jpg'
import app2Image from '../assets/app2.jpg'

export const links = [
  {
    name: "主 页",
    hash: "#home",
  },
  {
    name: "关 于",
    hash: "#about",
  },
  {
    name: "项 目",
    hash: "#projects",
  },
  {
    name: "技 能",
    hash: "#skills",
  },
  {
    name: "经 验",
    hash: "#experience",
  },
  {
    name: "联 系",
    hash: "#contact",
  },
]

export const experiencesData = [
  {
    title: "Java Spring",
    location: "深圳, 广东",
    description:
      "曾任职于华为、平安科技、宝能等后端开发岗位，参与开发多个App，Web后端项目。",
    icon: React.createElement(SiSpring),
    date: "2012 - 2018",
  },
  {
    title: "Android",
    location: "河南",
    description:
      "自学Android开发，使用Jetpack Compose 构建发布了一款影视App。计划构建更多App",
    icon: React.createElement(GrAndroid),
    date: "2021 - 至今",
  },
  {
    title: "UE5",
    location: "河南",
    description:
      "自学UE5开发，学习Gameplay Ability System开发RPG游戏，学习中...",
    icon: React.createElement(SiUnrealengine),
    date: "2019 - 至今",
  },
]

export const appsData = [
  {
    id: 1,
    imageUrl: app1Image,
    link: "https://utfs.io/f/6877015e-7756-45d7-a277-f14691afb231-8pc6t4.apk"
  },
  {
    id: 2,
    imageUrl: app2Image,
    link: "https://utfs.io/f/956657f9-7e6c-4aa5-95aa-5767138d6e7e-n7xrc5.apk"
  },
]

export const projectsData = [
  {
    title: "影视App",
    description:
      "🎉影视App🥳，看电影，刷剧。功能：下载，收藏，倍速，搜索，记忆播放位置等等。",
    tags: ["Android", "Compose", "Room", "Retrofit2", "Page"],
    imageUrl: appImg,
  },
  {
    title: "视力管理系统",
    description:
      "角色创建管理，登录注册，视力检测项目创建，充值，消费，查看检测结果等等。",
    tags: ["React", "SpringBoot", "PostgreSQL", "MyBatis", "SpringSecurity"],
    imageUrl: glassedImg,
  },
  {
    title: "Top-Down游戏",
    description:
      "游戏玩法能力系统学习 技能面板、电击技能、燃烧、击晕debuff等",
    tags: ["UE5", "Gameplay", "TopDown"],
    imageUrl: gameImg,
  },
]

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "SpringBoot",
  "MongoDB",
  "Mybatis",
  "PostgreSQL",
  "PostgreSQL",
  "Android",
  "UE5"
]
