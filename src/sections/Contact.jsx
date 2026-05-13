import { SectionHeader } from '../components/SectionHeader'
import useInView from '../hooks/useInView'



const Contact = () => {

  const { ref, inView } = useInView();


  return (
    <section ref={ref} className="py-25 px-[5%] bg-bg2">
      <div className="max-w-275 mx-auto">
        <SectionHeader
          label="Get in touch"
          title="Contact Me"
          inView={inView}
        />
      </div>
    </section>
  )
}

export default Contact