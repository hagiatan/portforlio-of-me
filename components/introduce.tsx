"use client";

import { useActiveSectionContext } from "@/contexts/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import avaImg from "@/public/ava.png";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function Introduce() {
  // const { ref } = useSectionInView("Home", 0.5);
  const homeRef = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  const [yearsExps, setYearsExps] = useState(0);
  useEffect(() => {
    const startDate = new Date("2021-01-01");
    const currentDate = new Date();
    //Calculate years experience
    let difference = currentDate.getFullYear() - startDate.getFullYear();
    if (
      currentDate.getMonth() < startDate.getMonth() ||
      (currentDate.getMonth() === startDate.getMonth() &&
        currentDate.getDate() < startDate.getDate())
    ) {
      difference--;
    }
    const monthDifference =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth());
    const roundedYears = monthDifference >= 6 ? difference + 1 : difference;
    setYearsExps(roundedYears);
  }, []);
  return (
    <section
      id="home"
      ref={homeRef.ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
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
            <Image
              src={avaImg}
              alt="Tan Ha"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
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
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-3xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm Tan Ha.</span> I'm a{" "}
        <span className="font-bold">Software Engineer</span> with{" "}
        <span className="font-bold">{yearsExps} years</span> of experience. I
        have worked on a wide range of projects, from simple applications to
        complex systems, primarily using{" "}
        <span className="underline">React (NextJS) & NodeJS</span> with language{" "}
        <span className="italic font-bold">JavaScript & TypeScript</span>
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-80 hover:scale-105 hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {}}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-80 hover:scale-105 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10"
          href="/CV-TanHa.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://linkedin.com/in/giatan1507/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
          href="https://github.com/hagiatan"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
