import { motion } from "framer-motion"
import ProjectBox from "../Component/projectbox"
import Title from "../Component/Title"
import Screen from "../Layouts/Screen"

const Project = () => {
  const projects = [
     {
      id: 4,
      img: "./project/internship.png",
      title: "Internship Allocator",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "An AI-powered internship allocation platform designed to intelligently match students with suitable internship opportunities based on their skills, qualifications, and preferences. Streamlines the allocation process through automated recommendations, smart matching algorithms, and a user-friendly interface.",
      url: "#",
      github: "https://github.com/Suyash18-prog/internship-allocator",
      skill: ["ReactJS", "TypeScript", "Tailwind", "GSAP"],
      preview: "./preview/dailycrimes.mp4",
    },
    {
      id: 2,
      img: "./project/apple.jpg",
      title: "Apple Clone",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "This is a clone website of the iPhone 15 Pro, featuring 3D models and dynamic animations that bring the device to life. The smooth interactions and immersive visuals replicate the experience of a real product site. Explore every detail as if you’re navigating the official Apple page.",
      url: "#",
      github: "https://github.com/Suyash18-prog/iPhone15-Apple-Clone",
      skill: ["ReactJs", "Tailwind", "GSAP", "ThreeJS"],
      preview: "",
    },
    {
      id: 3,
      img: "./project/loan-approval.png",
      title: "Loan Approval Prediction",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "A machine learning-based loan prediction system that evaluates applicant's financial details, income, credit history, and other relevant factors to predict loan approval eligibility. Uses data preprocessing, feature engineering, and classification algorithms to support faster and more informed lending decisions.",
      url: "#",
      github: "https://github.com/Suyash18-prog/Loan-Approval-Prediction",
      skill: ["Python", "Fast Api", "Machine Learning"],
      preview: "./preview/tweetspree.mp4",
    },
     {
      id: 5,
      img: "./project/query.jpeg",
      title: "Student Query Platform",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "A centralized student query platform where students can ask academic questions, share knowledge, and collaborate through a community-driven discussion system. Features AI-powered answer suggestions, duplicate question detection, and an interactive dashboard to improve the learning experience.",
      url: "#",
      github: "https://github.com/Suyash18-prog/student-query-platform",
      skill: ["React", "Tailwind", "Express", "MongoDB"],
      preview: "",
    },
    {
      id: 1,
      img: "./project/DailyCrime.png",
      title: "Daily Crimes",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "This is a newspaper UI website designed to give you the authentic feel of reading a traditional newspaper. Explore news stories in a classic layout, blending modern web design with old-world charm.",
      url: "#",
      github: "",
      skill: ["ReactJS", "TypeScript", "Tailwind", "GSAP"],
      preview: "./preview/dailycrimes.mp4",
    },
    
    
    {
      id: 11,
      img: "./project/Snake.png",
      title: "Snake Game",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "I made this snake game in my first year just for fun. At that time, I was a big Java fan and created this project using Java and JavaFX. This project really helped me deepen my understanding of object-oriented programming.",
      remove: true,
      github: "#",
      skill: ["Java", "JavaFX"],
      preview: "./preview/snake.mp4",
    },
    {
      id: 12,
      img: "./project/StopWatch.png",
      title: "Stop Watch",
      status: "Running",
      statusColor: "text-green-500",
      content:
        "I created this stopwatch to customize its functionality. It was built using only Java and JavaFX and is fully operational. This project helped me enhance my skills in Java programming and GUI design.",
      remove: true,
      github: "#",
      skill: ["Java", "JavaFX"],
      preview: "",
    },
  ]

  return (
    <Screen>
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex flex-row justify-between items-center"
      >
        <Title title="Projects" />
        <motion.a
          href="https://github.com/Suyash18-prog?tab=repositories"
          target="_blank"
          rel="noreferrer"
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.96 }}
          transition={{ duration: 0.2 }}
          className="font-medium text-blue-500 hover:underline tracking-tight"
        >
          More on Github
        </motion.a>
      </motion.div>

      {projects.map((project) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          whileHover={{ y: -4 }}
          transition={{
            duration: 0.45,
            delay: project.id * 0.04,
            ease: "easeOut",
          }}
          className="md:px-1.5"
        >
          <ProjectBox
            img={project.img}
            title={project.title}
            status={project.status}
            statusColor={project.statusColor}
            content={project.content}
            url={project.url}
            github={project.github}
            skill={project.skill}
            preview={project.preview}
            remove={project.remove}
          />
        </motion.div>
      ))}
    </Screen>
  )
}

export default Project
