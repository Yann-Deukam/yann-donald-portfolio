"use client";

import { motion } from "framer-motion";
import {
  ArrowDownToLine,
  ArrowRight,
  Download,
  Dribbble,
  Github,
  Linkedin,
  MoveDownRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";

export default function Hero() {
  const [text] = useTypewriter({
    words: ["Developer", "Designer", "Engineer"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });
  return (
    <section className="mb-28 max-w-[50rem] text-center sm:mb-0">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/images/profile.jpg"
              className="size-24 rounded-full object-cover shadow-xl"
              alt="profile"
              width={192}
              height={192}
              quality={95}
              priority={true}
            />
          </motion.div>
          <motion.span
            className="text-2xl absolute bottom-0 right-0"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            😉
          </motion.span>
        </div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="">Hello, I&apos;m Yann.</span> I&apos;m a{" "}
        <span className="font-bold typewriter text-violet-700">{text}</span>
        <span>
          <Cursor cursorStyle="_" />{" "}
        </span>
        with <span className="font-bold">3 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h1>

      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="bg-violet-800 hover:bg-violet-900 transition-all ease-in-out text-white px-7 py-3 flex items-center gap-2 rounded-md shadow-lg"
        >
          Contact me
          <span>
            <MoveDownRight />
          </span>
        </Link>
        <a
          className="bg-gray-50 px-7 py-3 flex items-center gap-2 rounded-md shadow-lg hover:bg-white transition-all ease-in-out cursor-pointer"
          href="/CV.pdf"
          download
        >
          Download Resume
          <span>
            <ArrowDownToLine />
          </span>
        </a>
        <div className="flex flex-row gap-4">
          <a className="bg-gray-50 p-3 flex items-center gap-2 rounded-md shadow-lg hover:bg-white transition-all ease-in-out cursor-pointer">
            <span>
              <Linkedin />
            </span>
          </a>
          <a className="bg-gray-50 p-3 flex items-center gap-2 rounded-md shadow-lg hover:bg-white transition-all ease-in-out cursor-pointer">
            <span>
              <Dribbble />
            </span>
          </a>
          <a className="bg-gray-50 p-3 flex items-center gap-2 rounded-md shadow-lg hover:bg-white transition-all ease-in-out cursor-pointer">
            <span>
              <Github />
            </span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
