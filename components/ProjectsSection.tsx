import React from 'react'
import Image from "next/image"
import Link from "next/link"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"
import SlideUp from "./SlideUp"

const projects = [
    {
      name: "Calculator",
      description:
        "The calculator project is a web application that I developed from scratch using modern web technologies.",
      image: "/calculator.jpg",
      github: "https://github.com/MahamMehak",
      link: "https://github.com/",
    },
    {
      name: "PMS",
      description: "A powerful web application that streamlines project planning, organization, and collaboration for efficient team workflows.",
      image: "/PMS.png",
      github: "https://github.com/",
      link: "https://github.com/",
    },
    {
      name: "LMS",
      description:
        "A comprehensive online platform for seamless course management, content delivery, and student engagement.",
      image: "/LMS.jpg",
      github: "https://github.com/",
      link: "https://github.com/",
    },
  ]
  
const ProjectsSection = () => {
  return (
    <section id="projects">
     <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-red-600 border-0 rounded"></hr>
      </h1>
      <div className='flex flex-col space-y-28'>
        {projects.map((project, idx) => {
          return(
            <div key={idx}>
              <SlideUp offset='300px 0px 300px 0px'>
              <div className='flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-32'>
                <div className='mt-8 md:w-1/2'>
                  <Link href={project.link} target="_blank">
                  <Image
                  src={project.image}
                  alt=""
                  width={1000}
                  height={1000}
                  className="rounded-xl shadow-xl hover:opacity-70"
                  />
                  
                  </Link>
                </div>
                <div className='mt-12 md:w-1/2'>
                <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                <p className="text-xl leading-7 mb-4 text-white-500 dark:text-white-500">
                       {project.description}
                    </p>
                 <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                    <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                    </Link>
                 </div>
                 

                </div>
              </div>
              </SlideUp>
              
              
            </div>
          )
        })}

      </div>
      </section>
  )
}

export default ProjectsSection