import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import ServiceDetail from './pages/ServiceDetail'
export default function App() {
  return <Routes><Route path="/" element={<Home />} /><Route path="/service/:id" element={<ServiceDetail />} /></Routes>
}
