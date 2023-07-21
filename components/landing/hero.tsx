"use client"
import { useAuth } from '@clerk/nextjs'
import TypewriterComponent from 'typewriter-effect'

export const LandingHero = () => {
  const { isSignedIn } = useAuth()
  return (
    <div className='space-y-5 font-bold text-center text-white py-36'>
      <div className='space-y-5 text-4xl font-extrabold sm:text-5xl md:text-6xl lg:text-7xl'>
        <h1>The Best AI Too for</h1>
        <div className='text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600'>
          <TypewriterComponent options={{
            strings: ['Chatbot.', 'Photo Generation.', 'Music Generation.', 'Code Generation.', 'Video Generation.'],
            autoStart: true,
            loop: true,
          }} />
        </div>
      </div>
    </div>
  )
}