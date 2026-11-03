import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import {  FaXTwitter } from "react-icons/fa6"
import { FiLinkedin } from "react-icons/fi"
import { LuGithub } from "react-icons/lu"

const ROTATING_ROLES = ["Full-Stack Developer", "AI Engineer", "DevOps Engineer"]

const Intro = () => {
  const [roleIndex, setRoleIndex] = useState(0)
  const [typedRole, setTypedRole] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = ROTATING_ROLES[roleIndex]
    const isComplete = typedRole === role
    const isEmpty = typedRole.length === 0

    const timer = setTimeout(() => {
      if (isComplete && !isDeleting) {
        setIsDeleting(true)
        return
      }

      if (isEmpty && isDeleting) {
        setIsDeleting(false)
        setRoleIndex(
          (currentIndex) => (currentIndex + 1) % ROTATING_ROLES.length,
        )
        return
      }

      setTypedRole((currentRole) =>
        isDeleting
          ? currentRole.slice(0, -1)
          : role.slice(0, currentRole.length + 1),
      )
    }, isComplete ? 1800 : isDeleting ? 45 : 75)

    return () => clearTimeout(timer)
  }, [isDeleting, roleIndex, typedRole])

  const links = [
    {
      href: "#",
      logo: <FaXTwitter />,
    },
    {
      href: "https://github.com/Suyash18-prog",
      logo: <LuGithub />,
    },
    {
      href: "https://www.linkedin.com/in/suyash-pandey-27a2a92b2/",
      logo: <FiLinkedin />,
    },
  ]

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
      className="flex flex-row gap-3 items-center"
    >
      <motion.img
        src="./IMG/dp2.jpeg"
        alt="Suyash Pandey"
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { opacity: 1, scale: 1 },
        }}
        animate={{
          y: [0, -4, 0],
          transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="border md:size-40 size-32 rounded-full"
      />
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 12 },
          visible: { opacity: 1, x: 0 },
        }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="flex flex-col"
      >
        <div className="md:text-4xl text-2xl font-bold font-bricolage">
          <span className=" text-theme-blue">Suyash</span> Pandey
        </div>
        <div className=" md:text-lg hidden md:block text-sm font-semibold font-bricolage text-gray-600 dark:text-white">
          <span className="text-pink-500">{typedRole}</span>
          <span className="ml-0.5 animate-pulse text-pink-500" aria-hidden="true">
            |
          </span>{" "}
          and{" "}
          <span className=" text-pink-500">Freelancer</span>, always building
          and learning.
        </div>
        <div className=" md:hidden font-semibold">
          A <span className="text-pink-500">{typedRole}</span>
          <span className="ml-0.5 animate-pulse text-pink-500" aria-hidden="true">
            |
          </span>
          .
        </div>

        <motion.div
          initial={{ opacity: 0, x: -8 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.45, duration: 0.35 }}
          className="mt-1 flex items-center gap-1.5 text-xs font-medium text-gray-500 dark:text-gray-300"
        >
          <span className="size-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.7)]" />
          Available for opportunities
        </motion.div>

        <div className="flex flex-wrap gap-2 text-2xl mt-1">
          {links.map((item) => (
            <motion.a
              key={item.logo}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -3, scale: 1.12 }}
              whileTap={{ scale: 0.92 }}
              className="hover:text-theme-blue hover:scale-125 transition-transform delay-100"
            >
              {item.logo}
            </motion.a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  )
}

export default Intro
