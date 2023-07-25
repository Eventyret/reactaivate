import { LandingContent } from '@/temp/components/landing/content';
import { LandingHero } from '@/temp/components/landing/hero';
import { LandingNavbar } from '@/temp/components/landing/landing-navbar'

const LandingPage = () => {
  return (
    <div className='h-full'>
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  )
}
export default LandingPage;