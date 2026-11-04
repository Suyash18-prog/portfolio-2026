import { FaRegFile } from "react-icons/fa6"
import ProjectBox from "./projectbox"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import CompScreen from "../Layouts/CompScreen"
import Title from "./Title"

const SelectedProjects = () => {
  const projects = [
    {
      id: 1,
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
  ]

  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  return (
    <CompScreen>
      <Title title="Selected Projects" icon={<FaRegFile />} />
      {projects.map((project) => (
        <div key={project.id} className=" md:px-1.5">
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
          />
        </div>
      ))}

      <div className="flex justify-center mt-4">
        <Link to="/project" whileTap={{ scale: 0.85 }} onClick={scrollToTop}>
          <motion.div
            whileHover={{
              scale: 1.07,
            }}
            transition={{ duration: 0.2 }}
            whileTap={{ scale: 0.85 }}
            onClick={() => handleNavigation("/project")}
            className="px-2 py-1.5 font-sans  cursor-pointer dark:shadow-none dark:border-none hover:bg-gray-200 dark:hover:bg-white/20 border-2 border-gray-200 shadow-md shadow-gray-300 font-medium text-black dark:text-white dark:bg-white/30 w-fit rounded-md "
          >
            show more
          </motion.div>
        </Link>
      </div>
    </CompScreen>
  )
}

export default SelectedProjects
