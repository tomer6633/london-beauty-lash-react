import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import TapToCall from '../components/TapToCall'
import { business } from '../data/BusinessData'

function useFadeIn() {
  const ref = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) el.classList.add('visible') }, { threshold: 0.15 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return ref
}

function BookingForm() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({ name: '', phone: '', service: '', date: '', notes: '' })
  if (submitted) return (
    <div className="text-center py-12">
      <div className="text-5xl mb-4">✅</div>
      <h3 className="font-oswald text-2xl text-brand-primary mb-2">Booking Request Received!</h3>
      <p className="text-gray-600">We'll confirm your appointment within 24 hours.</p>
    </div>
  )
  return (
    <form onSubmit={e => { e.preventDefault(); setSubmitted(true) }} className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
        <input required type="text" placeholder="Jane Smith" value={form.name} onChange={e => setForm({...form, name: e.target.value})}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
        <input required type="tel" placeholder="(519) 555-0100" value={form.phone} onChange={e => setForm({...form, phone: e.target.value})}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent" />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Service</label>
        <select required value={form.service} onChange={e => setForm({...form, service: e.target.value})}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent">
          <option value="">Select a service...</option>
          {business.services.map(s => <option key={s.id} value={s.name}>{s.name}</option>)}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Preferred Date</label>
        <input type="date" value={form.date} onChange={e => setForm({...form, date: e.target.value})}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent" />
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-gray-700 mb-1">Any notes or questions?</label>
        <textarea rows={3} placeholder="Lash style preference, allergies, questions..." value={form.notes} onChange={e => setForm({...form, notes: e.target.value})}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent resize-none" />
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="w-full bg-brand-primary hover:opacity-90 text-white font-oswald text-lg tracking-wide py-4 rounded-lg transition">
          BOOK MY APPOINTMENT
        </button>
      </div>
    </form>
  )
}

export default function Home() {
  const s1 = useFadeIn(), s2 = useFadeIn(), s3 = useFadeIn(), s4 = useFadeIn()
  return (
    <div className="font-inter bg-white pb-16 md:pb-0">
      <Navbar />
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={business.heroImage} alt="Beauty services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-brand-dark/65" />
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-3xl mx-auto pt-20">
          <p className="font-inter text-brand-accent uppercase tracking-widest text-sm mb-4">London, Ontario</p>
          <h1 className="font-oswald text-4xl md:text-6xl leading-tight mb-6">{business.tagline}</h1>
          <p className="text-lg text-gray-200 mb-8">{business.subtagline}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#book" className="bg-brand-accent text-brand-dark font-oswald text-lg px-8 py-4 rounded-lg hover:opacity-90 transition">Book an Appointment</a>
            <a href={business.telLink} className="border-2 border-white text-white font-oswald text-lg px-8 py-4 rounded-lg hover:bg-white hover:text-brand-dark transition">📞 Call Us</a>
          </div>
        </div>
      </section>
      <section className="bg-brand-primary text-white py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-3 gap-4 text-center">
          {[['5★','Google Rating'],['Premium','Lash Products'],['London, ON','Studio Location']].map(([v,l]) => (
            <div key={l}><div className="font-oswald text-3xl md:text-4xl text-brand-accent">{v}</div><div className="text-sm text-gray-200 mt-1">{l}</div></div>
          ))}
        </div>
      </section>
      <section className="py-20 px-4 bg-brand-light" id="services">
        <div ref={s1} className="fade-in max-w-6xl mx-auto">
          <h2 className="font-oswald text-4xl text-brand-primary text-center mb-3">Our Services</h2>
          <p className="text-center text-gray-500 mb-12">Professional lash and beauty services tailored to you.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {business.services.map(service => (
              <Link key={service.id} to={`/service/${service.id}`} className="group bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-shadow duration-300">
                <div className="overflow-hidden h-48">
                  <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-oswald text-xl text-brand-primary mb-2">{service.name}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                  <span className="inline-block mt-4 text-brand-accent font-medium text-sm">Learn More →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-white">
        <div ref={s2} className="fade-in max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <img src={business.aboutImage} alt="Beauty studio" className="rounded-2xl shadow-xl w-full object-cover h-80 object-top" />
          <div>
            <p className="text-brand-accent font-inter uppercase tracking-widest text-sm mb-3">About Our Studio</p>
            <h2 className="font-oswald text-4xl text-brand-primary mb-5">Where London Gets Glam</h2>
            <p className="text-gray-600 leading-relaxed mb-4">At London Beauty & Lash, every client is treated like our only client. We use premium products, take our time, and make sure you leave feeling incredible.</p>
            <p className="text-gray-600 leading-relaxed mb-6">Clean studio, expert technique, zero drama. That's our promise.</p>
            <a href="#book" className="inline-block bg-brand-primary text-white font-oswald px-6 py-3 rounded-lg hover:opacity-90 transition">Book Your Appointment</a>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-brand-light">
        <div ref={s3} className="fade-in max-w-5xl mx-auto">
          <h2 className="font-oswald text-4xl text-brand-primary text-center mb-12">Client Love</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {business.reviews.map((r,i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow">
                <div className="text-yellow-400 text-xl mb-3">{'★'.repeat(r.rating)}</div>
                <p className="text-gray-700 text-sm leading-relaxed mb-4">"{r.text}"</p>
                <p className="font-oswald text-brand-primary">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="book" className="py-20 px-4 bg-white">
        <div ref={s4} className="fade-in max-w-2xl mx-auto">
          <h2 className="font-oswald text-4xl text-brand-primary text-center mb-3">Book an Appointment</h2>
          <p className="text-center text-gray-500 mb-10">Fill out the form and we'll confirm within 24 hours.</p>
          <div className="bg-brand-light rounded-2xl p-8 shadow-md"><BookingForm /></div>
        </div>
      </section>
      <footer className="bg-brand-dark text-gray-400 py-8 text-center px-4">
        <p className="font-oswald text-white text-xl mb-2">{business.name}</p>
        <p className="text-sm">{business.address} &nbsp;|&nbsp; <a href={business.telLink} className="text-brand-accent hover:underline">{business.phone}</a></p>
        <p className="text-xs mt-4 text-gray-600">© 2026 {business.name}. All rights reserved.</p>
      </footer>
      <TapToCall />
    </div>
  )
}
