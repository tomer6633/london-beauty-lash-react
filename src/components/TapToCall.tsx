import { business } from '../data/BusinessData'
export default function TapToCall() {
  return (
    <a href={business.telLink} className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-brand-accent text-white text-center py-4 font-oswald text-lg tracking-wide shadow-lg">
      📞 TAP TO CALL — {business.phone}
    </a>
  )
}
