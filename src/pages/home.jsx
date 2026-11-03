import { motion } from "framer-motion"
import Skills from "../Component/skills"
import SelectedProjects from "../Component/selectedProjects"
import Highlights from "../Component/highlights"
import Intro from "../Component/Intro"
import Screen from "../Layouts/Screen"
import Summary from "../Component/Summary"

const Home = () => {
  return (
    <Screen>
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ y: -2 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <Intro />
      </motion.div>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.12,
              delayChildren: 0.15,
            },
          },
        }}
      >
        {[Summary, Skills, SelectedProjects, Highlights].map((Section) => (
          <motion.div
            key={Section.name}
            variants={{
              hidden: { opacity: 0, y: 12 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Section />
          </motion.div>
        ))}
      </motion.div>
    </Screen>
  )
}

export default Home
