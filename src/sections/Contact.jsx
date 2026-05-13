import { useState } from 'react';
import { SectionHeader } from '../components/SectionHeader'
import useInView from '../hooks/useInView'
import { ArrowRight } from 'lucide-react';



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

          {/* Right */}
          <div className={`transition-all duration-700 delay-200 ${inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>
            {sent ? (
              <div className='text-center py-10'>
                <div className='text-5xl mb-4'>✅</div>

                <h3 className='font-syne font-bold text-xl mb-2 grad'>
                  Message Sent!
                </h3>

                <p className='text-text2'>
                  I'll get back to you as soon as possible.
                </p>
              </div>
            ) : (
              <div className='bg-card border border-border rounded-2xl p-7 shadow-sm'>
                {/* Inputs */}
                <div className='space-y-4'>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={form.value}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    className='w-full bg-bg3 border boder-border rounded-lg px-4 py-3 text-sm outline-none focus:border-accent transition'
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={form.value}
                    onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                    className='w-full bg-bg3 border boder-border rounded-lg px-4 py-3 text-sm outline-none focus:border-accent transition'
                  />
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    value={form.value}
                    onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                    className='w-full bg-bg3 border boder-border rounded-lg px-4 py-3 text-sm outline-none focus:border-accent transition'
                  />
                </div>

                <button
                  onClick={() => setSent(true)}
                  className='cursor-pointer inline-flex items-center justify-center group gap-3 w-full mt-5 py-3 rounded-lg text-white font-semibold text-sm bg-linear-to-r from-accent to-purple-500 hover:opacity-90 transition'
                >
                  Send Message
                  <ArrowRight size={18} className='group-hover:translate-x-1 transition-transform duration-500 ease-in-out' />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact