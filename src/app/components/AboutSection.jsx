"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="flex justify-start gap-10">
      <ul className="list-disc pl-2 text-base">
      <li>C++</li>
        <li>DSA</li>
        <li>MySql</li>
        <li>HTML,CSS</li>
      </ul>
        
        <ul className="list-disc pl-2 text-base">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Redux Js</li>
        <li>Node.js</li>
        </ul>
        <ul className="list-disc pl-2 text-base">
        <li>Express Js</li>
        <li>REST API</li>
        <li>GraphQL</li>
        <li>Apollo</li>
        
        </ul>
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
          <li>cgpa:8.85.</li>
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
            <li>{`During my internship, Recreated company website with React.js, strengthening front-end skills and web development knowledge`}</li>
          </ul>
        </li>

        <li>
        <ul >
            <li className="font-extrabold">Visiontrek Communications</li>
            <li>ReactJS Developer Intern</li>
            <li>{`At VisionTrek Communication, During My Internship I created dynamic UIs,Gaming and Video Portals, and used Redux Toolkit for state management, enhancing my front-end architecture skills.`}</li>
          </ul>
        </li>

        <li>
        <ul >
            <li className="font-extrabold">Visiontrek Communications</li>
            <li>Jr.ReactJS Developer</li>
            <li>{`At VisionTrek Communication, I developed company's portfolio,made different video portals, integrate third-party APIs, and work on a DnD portal. I also added a video uploading section to the revenue portal, enabling AWS video uploads and access.`}</li>
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
            
           
I am a dedicated B.Tech student currently interning at VisionTrek Communications as a React.js Developer, expanding my skills in various React.js libraries and exploring Strapi for backend development. With a strong foundation in HTML, CSS, JavaScript, and React.js, coupled with a passion for front-end development, I excel in creating engaging web applications. My robust communication skills and diligent work ethic make me a valuable asset in collaborative environments, where I{`'`}m eager to contribute and make a meaningful impact.
          </p>
          <div className="flex flex-row justify-start gap-6 mt-8 text-xl">
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
