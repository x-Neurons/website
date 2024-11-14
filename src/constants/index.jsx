import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";
import mern from "../assets/mern.avif";
import wordpress from "../assets/wordpress.png";
import webScraping from "../assets/webScraping.png";
import nlp from "../assets/nlp.jpeg";
import llm from "../assets/llm.jpeg";
import cv from "../assets/cv.jpeg";
import bigData from "../assets/bigdata.jpeg";
import dataAnalysis from "../assets/dataanalysis.jpeg";
import automation from "../assets/automation.jpeg";

import user1 from "../assets/Canada.webp";
import user2 from "../assets/USA.webp";
import user3 from "../assets/Canada.webp";
import user4 from "../assets/England.png";
import user5 from "../assets/Pakistan.png";
import user6 from "../assets/USA.webp";

export const navItems = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Founders", href: "#founders" },
  { label: "Testimonials", href: "#testimonials" },
];

export const testimonials = [
  {
    user: "James Oliver",
    company: "Stellar Solutions",
    image: user1,
    text: "I am extremely satisfied with the services provided. The team was responsive, professional, and delivered results beyond my expectations.",
  },
  {
    user: "Jane Smith",
    company: "Blue Horizon Technologies",
    image: user2,
    text: "I couldn't be happier with the outcome of our project. The team's creativity and problem-solving skills were instrumental in bringing our vision to life",
  },
  {
    user: "David Johnson",
    company: "Quantum Innovations",
    image: user3,
    text: "Their commitment to excellence are commendable. I would highly recommend them to anyone looking for top-notch service.",
  },
  {
    user: "Ronee Brown",
    company: "Fusion Dynamics",
    image: user4,
    text: "Their innovative solutions helped us achieve our goals faster than we thought possible. We are grateful for their expertise and professionalism!",
  },
  {
    user: "Abid Tahir",
    company: "ProCoderz",
    image: user5,
    text: "I am amazed by the level of professionalism of by the team. They were able to exceed our expectations and deliver outstanding results.",
  },
  {
    user: "Emily Davis",
    company: "Synergy Systems",
    image: user6,
    text: "The team went beyond to ensure our project was a success. Their expertise are unmatched. I look forward to working with them again in the future.",
  },
];

export const features = [
  {
    img: mern,
    icon: <BotMessageSquare />,
    text: "MERN Stack Development",
    description:
      "End to End MERN stack development for any Bussiness",
  },
  {
    img: wordpress,
    icon: <Fingerprint />,
    text: "WordPress Full Stack Development",
    description:
      "Easy to manage, best for small Bussiness and Brands",
  },
  {
    img: webScraping,
    icon: <ShieldHalf />,
    text: "Web Scraping using Python",
    description:
      "Scrap bulk data according to requirement using Python",
  },
  {
    img: nlp,
    icon: <BatteryCharging />,
    text: "Natural Language Processing",
    description:
      "We create AI-driven solutions for language processing, enhancing chatbots, sentiment analysis, and text-based tasks.",
  },
  {
    img: llm,
    icon: <PlugZap />,
    text: "Large Language Models",
    description:
      "We specialize in fine-tuning large language models like GPT and BERT for customized business applications.",
  },
  {
    img: cv,
    icon: <GlobeLock />,
    text: "Computer Vision",
    description:
      "We deliver real-time object detection, image segmentation, and visual data insights.",
  },
  {
    img: bigData,
    icon: <GlobeLock />,
    text: "Big Data",
    description:
      "We process and analyze large datasets with Hadoop, Spark, and distributed systems for valuable insights."
  },
  {
    img: dataAnalysis,
    icon: <GlobeLock />,
    text: "Data Analysis",
    description:
      "We transform raw data into actionable insights with advanced data interpretation techniques."
  },
  {
    img: automation,
    icon: <GlobeLock />,
    text: "Data Automation",
    description:
      "We streamline data workflows and automate processing to improve efficiency and accuracy."
  },
  
];

export const checklistItems = [
  {
    title: "Code merge made easy",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Review code without worry",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "AI Assistance to reduce time",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
  {
    title: "Share work in minutes",
    description:
      "Track the performance of your VR apps and gain insights into user behavior.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
