"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a degree in{" "}
        <span className="font-medium">Computer enginneering</span>, I decided to
        pursue my passion for Design. I enrolled in a bootcamp and learned{" "}
        <span className="font-medium">Branding and brand indentity Design</span>
        . <span className="italic">My favorite part of Graphic design</span> is
        the problem-solving aspect. I <span className="underline">love</span>{" "}
        the feeling of finally figuring out a solution to a problem for
        businesses.
      </p>

      <p>
        <span className="italic">When I'm not designing</span>, I enjoy playing
        drawing, watching movies, and playing with my cat. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning how to play the piano.
      </p>
    </motion.section>
  );
}
