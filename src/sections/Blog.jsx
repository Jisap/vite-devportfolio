import { SectionHeader } from "../components/SectionHeader"
import useInView from "../hooks/useInView"
import { BLOGS } from "../data/blog"
import { useState } from "react";



const Blog = () => {
  const { ref, inView } = useInView();
  const [idx, setIdx] = useState(0);

  const visible = 3;
  const max = BLOGS.length = visible;

  return (
    <>
      <section ref={ref} id="blog" className="py-25 px-[5%] bg-bg2">
        <div className="max-w-275 mx-auto">
          <SectionHeader
            label="Writing"
            title="Blog Articles"
            inView={inView}
          />
        </div>
      </section>
    </>
  )
}

export default Blog