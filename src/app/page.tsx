import HeroSection from './components/HeroSection'
import ServiceSection from './components/ServiceSection'
import TestimonialsSection from './components/TestimonialsSection'

export const metadata = {
  title: 'Betec - Industrial Solutions',
  description: 'Leading industrial solutions provider',
}

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServiceSection />
      <TestimonialsSection />
    </main>
  )
}