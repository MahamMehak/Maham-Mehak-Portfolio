import React from "react"
import Image from "next/image"

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "Python" },
  { skill: "React" },
  { skill: "Next.js" },
  { skill: "Tailwind CSS" },
  { skill: "Git" },
  { skill: "GitHub" },
  { skill: "Jupyter Notebooks" },
]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl  hover:text-red-800" >
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-red-800 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Maham and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Web Developer
              proficient in WordPress and Next.js.
            </p>
            <br />
            <p>
            I earned my BS in Computer Science from Superior University Okara,
             and have been actively contributing to the field ever since.
            </p>
            <br />
            <p>
            Beyond my professional pursuits,
             I lead a diverse and fulfilling life with a wide range of hobbies and passions. Whether I&#39;m immersing myself in a captivating book, engaging in sports activities, exploring new destinations, or creating content for my YouTube channel, I constantly
             seek out fresh experiences that keep me engaged and facilitate continuous learning.
            </p>
            <br />
            <p>
            I firmly believe in the power of {" "}
              <span className="font-bold text-red-600">
              personal growth and relentless innovation
              </span>{" "}
             
              Technology is my passion, and I constantly strive to push the boundaries of what is possible. 
              With an unwavering commitment to expanding my horizons, 
              I eagerly anticipate the future of my career and warmly embrace new opportunities along the way. 
              Let&#39;s embark on this exciting journey together! 😊
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-red-600 px-4 py-2 mr-2 mt-2 text-white-900 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
            <div className="mt-20 mr-20 justify-center">
            <Image
              src="/girls.png"
              alt=""
              
              width={350}
              height={350}
              className="hidden md:block md:relative md:bottom-4 md:left-28 md:z-0"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
