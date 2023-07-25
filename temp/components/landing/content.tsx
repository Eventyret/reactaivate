"use client"

import { Card, CardContent, CardHeader, CardTitle } from '@/temp/components/ui/card'

const testimonials = [
  {
    name: "John Doe",
    title: "CEO",
    avatar: "J",
    description: "Amazing and also free"
  },
  {
    name: "John Doe",
    title: "CEO",
    avatar: "J",
    description: "Amazing and also free"
  },
  {
    name: "John Doe",
    title: "CEO",
    avatar: "J",
    description: "Amazing and also free"
  },
  {
    name: "John Doe",
    title: "CEO",
    avatar: "J",
    description: "Amazing and also free"
  },
]
export const LandingContent = () => {
  return (
    <div className='px-10 pb-20'>
      <h2 className='mb-10 text-4xl font-extrabold text-center text-white'>Testimonals</h2>
      <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {testimonials.map((testimonial) => (
          <Card key={testimonial.description} className='bg-[#192339] border-none text-white'>
            <CardHeader>
              <CardTitle className='flex items-center gap-x-2'>
                <div>
                  <p className='text-lg'>{testimonial.name}</p>
                  <p className='text-sm text-zinc-400'>{testimonial.title}</p>
                </div>
              </CardTitle>
              <CardContent className='px-4 pt-0'>
                {testimonial.description}
              </CardContent>
            </CardHeader>
          </Card>
        ))}
      </div>
    </div>
  )
}