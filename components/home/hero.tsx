"use client"
import { useEffect, useState, Fragment } from "react";
import styles from "@/styles/hero.module.css";

const SLIDES = [
  {
    title: "Digital\nStudio",
    navtitle: "Design",
    description: "Branding / Packaging",
    style: styles.slide1,
  },
  {
    title: "Branding\nExperience",
    navtitle: "Branding",
    description: "Branding / Packaging",
    style: styles.slide2,
  },
];
const SLIDE_SPEED = 6000;
const Hero = () => {
  const [visible, setVisible] = useState(0);
  useEffect(() => {
    const interval = setInterval(
      () => setVisible((visible + 1) % SLIDES.length),
      SLIDE_SPEED
    );
    return () => {
      clearInterval(interval);
    };
  }, [visible]);

  return (
    <section id="hero" className="relative h-screen min-h-screen max-h-screen">
      <ul className="absolute select-none cursor-pointer flex right-0 top-0 bottom-0 h-100 items-end lg:items-center z-20 ">
        <span className="flex flex-col w-64 bg-black/50">
          {SLIDES.map(({ navtitle }, index) => (
            <li
              key={navtitle + index}
              className={`relative group flex w-full items-center px-4 h-[3.125rem] ${
                visible === index ? "text-white" : "text-white/[.55]"
              } hover:text-white`}
              onClick={() => setVisible(index)}
            >
              <span className="absolute top-0 bottom-0 left-0 w-0 h-full group-hover:w-full ease-in-out duration-300 bg-black z-0" />
              <span className={`relative ${styles.after} z-10`}>{index + 1}</span>
              <span className="ml-12 z-10">{navtitle}</span>
            </li>
          ))}
        </span>
      </ul>
      {SLIDES.map(({ title, description, style }, index) => (
        <div
          id={`slide-${index + 1}`}
          key={title + index}
          className={`${
            visible === index ? "flex" : "hidden"
          } relative flex-col justify-center h-screen min-h-screen max-h-screen pl-32 ${style}`}
        >
          <div className="absolute z-0 top-0 left-0 bottom-0 right-0 bg-black/25 z-0" />
          <h1 className="text-3xl lg:text-5xl lg:text-9xl font-semibold text-white mb-10 z-10">
            {title.split("\n").map((text, index) => (
              <Fragment key={text + index}>
                {index > 0 && <br />}
                {text}
              </Fragment>
            ))}
          </h1>
          <p className="inline-block text-xl font-light tracking-wide text-neutral-500 hover:cursor-pointer hover:text-red-500 z-10">
            {description}
          </p>
        </div>
      ))}
    </section>
  );
};

export default Hero;
