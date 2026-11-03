import { BsFeather } from "react-icons/bs"
import CompScreen from "../Layouts/CompScreen"
import Title from "./Title"

const Highlights = () => {
  return (
    <CompScreen>
      <Title title="Highlights" icon={<BsFeather />} />
      <div className="mt-3 text-base ">
        <div className="border-b-2 dark:border-white/30 "></div>
        <div className=" divide-y-2 dark:divide-white/30 ">
          <div>
            <div className=" py-4 md:text-justify text-start  ">
              I'm currently on a 100 Days of Code journey, which I started on
              November 1, 2026 . Every day, I'm learning something new in both DSA
              and Development .
            </div>
          </div>
          <div>
            <div className=" py-4 md:text-justify text-start ">
              I created my first website during my first-ever hackathon, held at
              DAVV, Indore , using only HTML, CSS, and JavaScript with my team. I
              had no idea about any of it at the time, but I managed to create a
              simple website. Unfortunately, we didn't win, but we learned a lot
              and really enjoyed meeting fellow tech nerds... haha!{" "}

            </div>
          </div>
          <div>
            <div className=" py-4 md:text-justify text-start ">
              I started learning programming with Python in my second year, with no
              prior knowledge of programming at all. Python quickly became my
              first love :) Learning programming was so challenging for me that
              I switched teachers three times.
            </div>
          </div>
        </div>
        <div className="border-b-2 dark:border-white/30"></div>
      </div>
    </CompScreen>
  )
}

export default Highlights
