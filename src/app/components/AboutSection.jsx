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
    title: "Experience",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-base">
        <li>
          <ul >
            <li className="font-extrabold">Jai Santoshi Infosystem Pvt Ltd.</li>
            <li>FrontEnd (Web) Developer</li>
            <li>Applied React.js skills to recreate the company website, showcasing practical application of theoretical knowledge. Strengthened front-end proficiency through hands-on experiences, deepening web development understanding.</li>
          </ul>
        </li>

        <li>
        <ul >
            <li className="font-extrabold">Visiontrek Communications</li>
            <li>FrontEnd (Web) Developer</li>
            <li>Currently I am working as an intern at visiontrek Communications.</li>
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
            
           
"I am a dedicated B.Tech student currently interning at VisionTrek Communications as a React.js Developer, expanding my skills in various React.js libraries and exploring Strapi for backend development. With a strong foundation in HTML, CSS, JavaScript, and React.js, coupled with a passion for front-end development, I excel in creating engaging web applications. My robust communication skills and diligent work ethic make me a valuable asset in collaborative environments, where I{`'`}m eager to contribute and make a meaningful impact."
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
              Experience{" "}
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
