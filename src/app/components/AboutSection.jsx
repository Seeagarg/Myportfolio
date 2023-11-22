"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-base">
        <li>React.js</li>
        <li>HTML,CSS</li>
        <li>JavaScript</li>
        <li>C++</li>
        <li>Node.js</li>
        <li>Express Js</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-base">
        <li>
          <ul>
          <li className="font-extrabold">Secondary Education(2017-2018)</li>
          <li>Meera Public School,Sardulewala</li>
          <li>Scored 89.6%.</li>
          </ul>
        </li>
        <li>
        <ul>
          <li className="font-extrabold">Higher Secondary Education(2019-2020)</li>
          <li>Meera Public School,Sardulewala</li>
          <li>Scored 95.2%.</li>
          </ul>
        </li>
        <li>
        <ul>
          <li className="font-extrabold">Graduation(2020-2024)</li>
          <li>B.tech in Computer Science and Engineering</li>
          <li>IK Gujral Punjab Technical University,Kapurthala</li>
          <li>cgpa:89.4.</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-base">
        <li>
          <ul>
            <li className="font-extrabold">Jai Santoshi Infosystem Pvt Ltd.</li>
            <li>FrontEnd (Web) Developer</li>
            <li>Applied React.js skills to recreate the company website, showcasing practical application of theoretical knowledge. Strengthened front-end proficiency through hands-on experiences, deepening web development understanding.</li>
          </ul>

        </li>
       
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            
            I am a dedicated and confident B.Tech student with robust communication skills. My strength lies in teamwork, coupled with a diligent work ethic. Beyond my academic pursuits, I've cultivated expertise in React.js, expressing my genuine passion for front-end development. Proficient in HTML, CSS, JavaScript, and react js, and armed with a solid understanding of data structures, I create engaging and user-friendly web applications. Eager to contribute my skills to exciting projects, I thrive in collaborative environments, ready to make a meaningful impact.
          </p>
          <div className="flex flex-row justify-start mt-8 text-xl">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
