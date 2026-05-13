import { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader'
import useInView from '../hooks/useInView'



const Contact = () => {

  const { ref, inView } = useInView();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  return (
    <section id="contact" ref={ref} className="py-25 px-[5%] bg-bg2">
      <div className="max-w-225 mx-auto">
        <SectionHeader
          label="Get in touch"
          title="Contact Me"
          inView={inView}
        />

        <div className='grid md:grid-cols-2 gap-12 items-start'>
          {/* Left Info */}
          <div className={`transition-all duration-700 ${inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"}`}>
            <p className='text-text2 leading-[1.8] mb-7 text-[15px]'>
              I'm always open to interesting conversations, collaborations, or new opportunities.
              Whether you hace a project in mind or just want to say hi - my inbox is open!
            </p>

            {
              [
                ["📧", "Email", "alex@dev.io"],
                ["💼", "LinkedIn", "linkedin.com/in/alexchen"],
                ["🐙", "GitHub", "github.com/alexchen"],
                ["🐦", "Twitter", "@alex_codes"],
              ].map(([icon, label, value]) => (
                <div key={label} className='flex to-zinc-50 gap-3 mb-4'>
                  <div className='w-10 h-10 flex items-center justify-center rounded-lg bg-bg3 border border-border text-lg'>
                    {icon}
                  </div>

                  <div>
                    <p className='text-xs text-text2'>{label}</p>
                    <p className='text-sm text-text2'>{value}</p>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact