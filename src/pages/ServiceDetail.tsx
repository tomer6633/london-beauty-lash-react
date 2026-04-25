import { useParams, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import TapToCall from '../components/TapToCall'
import { business } from '../data/BusinessData'
export default function ServiceDetail() {
  const { id } = useParams()
  const service = business.services.find(s => s.id === id)
  if (!service) return <div className="pt-24 text-center text-gray-500">Not found. <Link to="/" className="text-brand-accent underline">Go back</Link></div>
  return (
    <div className="font-inter bg-white pb-16 md:pb-0">
      <Navbar />
      <section className="relative h-72 md:h-96 overflow-hidden">
        <img src={service.image} alt={service.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-brand-dark/60 flex items-center justify-center">
          <h1 className="font-oswald text-4xl md:text-5xl text-white text-center px-4">{service.name}</h1>
        </div>
      </section>
      <section className="max-w-3xl mx-auto px-4 py-16">
        <p className="text-gray-600 text-lg leading-relaxed mb-8">{service.description}</p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={business.telLink} className="bg-brand-accent text-white font-oswald text-lg px-8 py-4 rounded-lg hover:opacity-90 transition text-center">📞 Call — {business.phone}</a>
          <a href="/#quote" className="border-2 border-brand-primary text-brand-primary font-oswald text-lg px-8 py-4 rounded-lg hover:bg-brand-primary hover:text-white transition text-center">Get a Free Quote</a>
        </div>
        <Link to="/" className="inline-block mt-8 text-brand-accent hover:underline">← Back to all services</Link>
      </section>
      <TapToCall />
    </div>
  )
}
