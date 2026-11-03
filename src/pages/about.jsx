import Screen from "../Layouts/Screen"
import Title from "../Component/Title"

const About = () => {
  return (
    <Screen>
      <div className="flex flex-row justify-between items-center">
        <Title title="About Me" />
        <a
          href="#"
          target="_blank"
          className=" font-medium text-blue-500 hover:underline tracking-tight"
        >
          Follow me on X
        </a>
      </div>
      <div className=" md:px-1.5">
        <div className=" mt-6 md:mt-0">
          <div className=" flex flex-row gap-2 items-center justify-between mt-2 ">
            <div className=" text-start w-full hidden md:block  ">
              <ul className="">
                <li className=" flex flex-row gap-2 items-center">
                  <i className="fa-solid fa-paper-plane"></i> Lives in{" "}
                  <a
                    href="https://en.wikipedia.org/wiki/Indore"
                    target="_blank"
                    className=" font-semibold underline cursor-pointer hover:text-blue-500"
                  >
                    Indore, India.
                  </a>
                </li>
                <li className=" flex flex-row gap-1 items-center">
                  <i className="fa-solid fa-graduation-cap"></i>
                  Pursuing a Dual degree in{" "}
                  <span className="text-blue-500 font-semibold">
                    AI and Data Science
                  </span>
                  .
                </li>
                <li className="flex flex-row gap-2 items-center">
                  <i className="fa-solid fa-screwdriver-wrench"></i>
                  Primarily work with{" "}
                  <span>
                    <span className="text-blue-500 font-semibold">React</span>,{" "}
                    <span className="text-blue-500 font-semibold">
                      TypeScript
                    </span>
                    ,{" "}
                    <span className="text-blue-500 font-semibold">
                      Tailwind CSS
                    </span>
                    ,{" "}
                    <span className="text-blue-500 font-semibold">Node.js</span>
                    , and{" "}
                    <span className="text-blue-500 font-semibold">MongoDB</span>
                    .
                  </span>
                </li>
                <li className=" flex flex-row gap-2 items-center">
                  <i className="fa-solid fa-briefcase"></i>
                  Open to new opportunities and freelancing. Any support is
                  appreciated!
                </li>
                <li className=" flex flex-row gap-2 items-center">
                  <i className="fa-solid fa-people-group"></i>
                  Always open to collaborating on research or development.
                </li>
                <li className=" flex flex-row gap-2 items-center">
                  <i className="fa-solid fa-medal"></i>
                  Cricket player with a strong interest in football.
                </li>

                <li className=" flex flex-row gap-1 items-center">
                  <i className="fa-solid fa-code"></i>Code with music is my
                  therapy.{" "}
                </li>
              </ul>
            </div>
            <img
              className=" border md:size-52 md:scale-90  rounded-xl md:rounded-full hover:grayscale  transition-all delay-100"
              src="/IMG/dp2.jpeg"
            />
          </div>

          <div className=" ">
            <div className=" my-4  md:text-justify text-start mt-6 ">
              Hey, I'm Suyash Pandey, a fourth-year student exploring the field
              of engineering. I live in Indore, India, and I'm a full-stack
              developer who loves building things and learning something new
              every day from them. I mainly work with React with TypeScript and
              Tailwind for frontend development and NodeJS and MongoDB for
              backend. As a computer science student, I'm also skilled in Ai and Machine Learning.
              I'm looking for opportunities in both web development and
              ai engineering roles.
            </div>
            <div className=" my-4  md:text-justify text-start ">
              With a strong foundation in various technologies, I have
              participated in multiple hackathons where I implemented innovative
              ideas using different tech stacks. I also earned some exciting
              merchandise and prizes, including Certificates. These experiences
              highlight my ability to work as a team player and lead a team
              effectively. I've successfully worked under various circumstances
              and tight timelines, adapting quickly to ensure the success of
              every project.
            </div>
            <div className=" my-4  md:text-justify text-start ">
              Besides coding, I'm also a cricket player on my college team,
              which has taught me how to effectively work with any team in any
              situation. Additionally, I've been a member of various societies
              and attended several orientations, which provided me with a broad
              understanding of how things work in computer science and helped me
              explore this field more deeply.
            </div>
          </div>
        </div>
      </div>
    </Screen>
  )
}

export default About
